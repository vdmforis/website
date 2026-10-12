'use server';

import { revalidatePath } from 'next/cache';
import { sendMagicLink, createSession, destroySession, requireAuth, requireAdmin } from './auth';
import { 
  createJob as dbCreateJob, 
  createTimeEntry as dbCreateTimeEntry, 
  updateTimeEntry as dbUpdateTimeEntry,
  addJobPhoto as dbAddJobPhoto,
  createUser as dbCreateUser,
  deactivateUser as dbDeactivateUser,
  getTimeEntriesForWorker,
  executeQuery,
} from '@/lib/db/client';

export async function sendMagicLinkAction(email: string, ip?: string) {
  return await sendMagicLink(email, ip);
}

export async function logoutAction() {
  await destroySession();
  return { success: true };
}

export async function createJobAction(data: {
  job_date: string;
  start_time: string;
  estimated_hours: number;
  client_name: string;
  client_address: string;
  client_phone: string;
  task_description: string;
  notes: string;
  assigned_to: number;
}) {
  try {
    const user = await requireAdmin();
    
    const jobId = await dbCreateJob({
      job_date: new Date(data.job_date),
      start_time: data.start_time,
      estimated_hours: data.estimated_hours,
      client_name: data.client_name,
      client_address: data.client_address,
      client_phone: data.client_phone || null,
      task_description: data.task_description,
      notes: data.notes || null,
      created_by: user.id,
      assigned_to: data.assigned_to || null,
    });
    
    revalidatePath('/team/dashboard');
    revalidatePath('/team/admin');
    
    return { success: true, jobId };
  } catch (error) {
    console.error('Error creating job:', error);
    return { success: false, error: 'Error al crear el trabajo' };
  }
}

export async function createTimeEntryAction(data: {
  job_id: number;
  entry_date: string;
  start_time: string;
  end_time: string;
  break_minutes: number;
  notes: string;
}) {
  try {
    const user = await requireAuth();
    
    const entryId = await dbCreateTimeEntry({
      job_id: data.job_id,
      worker_id: user.id,
      entry_date: new Date(data.entry_date),
      start_time: data.start_time,
      end_time: data.end_time || null,
      break_minutes: data.break_minutes || 0,
      notes: data.notes || null,
    });
    
    revalidatePath('/team/hours');
    revalidatePath('/team/dashboard');
    
    return { success: true, entryId };
  } catch (error) {
    console.error('Error creating time entry:', error);
    return { success: false, error: 'Error al registrar las horas' };
  }
}

export async function updateTimeEntryAction(
  entryId: number,
  data: {
    end_time?: string;
    break_minutes?: number;
    notes?: string;
  }
) {
  try {
    await requireAuth();
    
    await dbUpdateTimeEntry(entryId, data);
    
    revalidatePath('/team/hours');
    revalidatePath('/team/dashboard');
    
    return { success: true };
  } catch (error) {
    console.error('Error updating time entry:', error);
    return { success: false, error: 'Error al actualizar las horas' };
  }
}

export async function addPhotoAction(timeEntryId: number, blobUrl: string, caption?: string) {
  try {
    await requireAuth();
    
    const photoId = await dbAddJobPhoto(timeEntryId, blobUrl, caption);
    
    revalidatePath('/team/hours');
    
    return { success: true, photoId };
  } catch (error) {
    console.error('Error adding photo:', error);
    return { success: false, error: 'Error al añadir la foto' };
  }
}

export async function createWorkerAction(data: {
  email: string;
  name: string;
}) {
  try {
    await requireAdmin();
    
    const userId = await dbCreateUser(data.email, data.name, 'worker');
    
    revalidatePath('/team/admin');
    
    return { success: true, userId };
  } catch (error) {
    console.error('Error creating worker:', error);
    return { success: false, error: 'Error al crear el trabajador' };
  }
}

export async function deactivateWorkerAction(workerId: number) {
  try {
    await requireAdmin();
    
    await dbDeactivateUser(workerId);
    
    revalidatePath('/team/admin');
    
    return { success: true };
  } catch (error) {
    console.error('Error deactivating worker:', error);
    return { success: false, error: 'Error al desactivar el trabajador' };
  }
}

export async function approveTimeEntryAction(entryId: number) {
  try {
    const user = await requireAdmin();
    
    await executeQuery(
      'UPDATE time_entries SET approved = true, approved_by = $1, approved_at = NOW() WHERE id = $2',
      [user.id, entryId]
    );
    
    revalidatePath('/team/admin');
    revalidatePath('/team/hours');
    
    return { success: true };
  } catch (error) {
    console.error('Error approving time entry:', error);
    return { success: false, error: 'Error al aprobar las horas' };
  }
}

export async function exportTimeEntriesCSV(workerId?: number, startDate?: string, endDate?: string) {
  try {
    await requireAdmin();
    
    let entries;
    if (workerId) {
      entries = await getTimeEntriesForWorker(
        workerId,
        startDate ? new Date(startDate) : undefined,
        endDate ? new Date(endDate) : undefined
      );
    } else {
      const query = `
        SELECT te.*,
               j.client_name,
               w.name as worker_name,
               CASE 
                 WHEN te.end_time IS NOT NULL THEN
                   EXTRACT(EPOCH FROM (te.end_time::time - te.start_time::time)) / 3600 - (te.break_minutes / 60.0)
                 ELSE 0
               END as total_hours
        FROM time_entries te
        JOIN jobs j ON te.job_id = j.id
        JOIN team_users w ON te.worker_id = w.id
        WHERE 1=1
        ${startDate ? `AND te.entry_date >= '${startDate}'` : ''}
        ${endDate ? `AND te.entry_date <= '${endDate}'` : ''}
        ORDER BY te.entry_date DESC
      `;
      
      entries = await executeQuery(query);
    }
    
    const csvRows = [
      ['Fecha', 'Trabajador', 'Cliente', 'Inicio', 'Fin', 'Descanso (min)', 'Horas totales', 'Aprobado'].join(',')
    ];
    
    for (const entry of entries) {
      csvRows.push([
        entry.entry_date,
        entry.worker_name,
        entry.job?.client_name || entry.client_name,
        entry.start_time,
        entry.end_time || '',
        entry.break_minutes,
        entry.total_hours.toFixed(2),
        entry.approved ? 'Sí' : 'No'
      ].join(','));
    }
    
    return { success: true, csv: csvRows.join('\n') };
  } catch (error) {
    console.error('Error exporting CSV:', error);
    return { success: false, error: 'Error al exportar el CSV' };
  }
}
