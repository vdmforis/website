import type { TeamUser, Job, TimeEntry, JobWithDetails, TimeEntryWithDetails } from './types';

export const DEMO_USERS: TeamUser[] = [
  {
    id: 1,
    email: 'dennis@vdmforis.com',
    name: 'Dennis',
    role: 'admin',
    active: true,
    created_at: new Date('2025-01-01'),
    updated_at: new Date('2025-01-01')
  },
  {
    id: 2,
    email: 'mohamed@vdmforis.com',
    name: 'Mohamed',
    role: 'worker',
    active: true,
    created_at: new Date('2025-01-15'),
    updated_at: new Date('2025-01-15')
  }
];

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const dayAfterTomorrow = new Date(today);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

export const DEMO_JOBS: JobWithDetails[] = [
  {
    id: 1,
    job_date: today,
    start_time: '09:00',
    estimated_hours: 3,
    client_name: 'María García',
    client_address: 'Calle Mayor 45, Grau de Castellón',
    client_phone: '+34 611 222 333',
    task_description: 'Reparar grifo de cocina y revisar desagüe',
    notes: 'Cliente prefiere mañana',
    created_by: 1,
    assigned_to: 2,
    status: 'scheduled',
    created_at: new Date('2025-10-10'),
    updated_at: new Date('2025-10-10'),
    worker_name: 'Mohamed',
    creator_name: 'Dennis'
  },
  {
    id: 2,
    job_date: today,
    start_time: '14:00',
    estimated_hours: 2,
    client_name: 'Carlos Ruiz',
    client_address: 'Avenida del Mar 12, Benicàssim',
    client_phone: '+34 622 444 555',
    task_description: 'Pintar dormitorio principal',
    notes: 'Pintura blanca, ya comprada por el cliente',
    created_by: 1,
    assigned_to: 2,
    status: 'scheduled',
    created_at: new Date('2025-10-11'),
    updated_at: new Date('2025-10-11'),
    worker_name: 'Mohamed',
    creator_name: 'Dennis'
  },
  {
    id: 3,
    job_date: tomorrow,
    start_time: '10:00',
    estimated_hours: 4,
    client_name: 'Ana López',
    client_address: 'Calle del Sol 23, Castellón',
    client_phone: '+34 633 666 777',
    task_description: 'Instalación de aire acondicionado',
    notes: 'Traer herramientas especiales',
    created_by: 1,
    assigned_to: 2,
    status: 'scheduled',
    created_at: new Date('2025-10-11'),
    updated_at: new Date('2025-10-11'),
    worker_name: 'Mohamed',
    creator_name: 'Dennis'
  },
  {
    id: 4,
    job_date: dayAfterTomorrow,
    start_time: '09:00',
    estimated_hours: 3,
    client_name: 'Pedro Martínez',
    client_address: 'Plaza España 8, Grau de Castellón',
    client_phone: '+34 644 888 999',
    task_description: 'Revisar sistema eléctrico',
    notes: 'Posible problema en cuadro eléctrico',
    created_by: 1,
    assigned_to: 2,
    status: 'scheduled',
    created_at: new Date('2025-10-12'),
    updated_at: new Date('2025-10-12'),
    worker_name: 'Mohamed',
    creator_name: 'Dennis'
  },
  {
    id: 5,
    job_date: yesterday,
    start_time: '09:30',
    estimated_hours: 2.5,
    client_name: 'Laura Sánchez',
    client_address: 'Calle Valencia 56, Castellón',
    client_phone: '+34 655 111 222',
    task_description: 'Arreglar persiana rota',
    notes: null,
    created_by: 1,
    assigned_to: 2,
    status: 'completed',
    created_at: new Date('2025-10-10'),
    updated_at: new Date('2025-10-11'),
    worker_name: 'Mohamed',
    creator_name: 'Dennis'
  }
];

export const DEMO_TIME_ENTRIES: TimeEntryWithDetails[] = [
  {
    id: 1,
    job_id: 5,
    worker_id: 2,
    entry_date: yesterday,
    start_time: '09:30',
    end_time: '12:15',
    break_minutes: 15,
    notes: 'Trabajo completado. Cliente muy satisfecho.',
    approved: false,
    approved_by: null,
    approved_at: null,
    created_at: yesterday,
    updated_at: yesterday,
    worker_name: 'Mohamed',
    total_hours: 2.5,
    job: DEMO_JOBS[4] as any,
    photos: []
  }
];

export function getDemoUserByEmail(email: string): TeamUser | null {
  return DEMO_USERS.find(u => u.email === email && u.active) || null;
}

export function getDemoJobsForWorker(workerId: number, startDate?: Date, endDate?: Date): JobWithDetails[] {
  let jobs = DEMO_JOBS.filter(j => j.assigned_to === workerId);
  
  if (startDate) {
    jobs = jobs.filter(j => j.job_date >= startDate);
  }
  
  if (endDate) {
    jobs = jobs.filter(j => j.job_date <= endDate);
  }
  
  return jobs.sort((a, b) => {
    const dateCompare = a.job_date.getTime() - b.job_date.getTime();
    if (dateCompare !== 0) return dateCompare;
    return a.start_time.localeCompare(b.start_time);
  });
}

export function getDemoTimeEntriesForWorker(workerId: number, startDate?: Date, endDate?: Date): TimeEntryWithDetails[] {
  let entries = DEMO_TIME_ENTRIES.filter(e => e.worker_id === workerId);
  
  if (startDate) {
    entries = entries.filter(e => e.entry_date >= startDate);
  }
  
  if (endDate) {
    entries = entries.filter(e => e.entry_date <= endDate);
  }
  
  return entries.sort((a, b) => {
    const dateCompare = b.entry_date.getTime() - a.entry_date.getTime();
    if (dateCompare !== 0) return dateCompare;
    return b.start_time.localeCompare(a.start_time);
  });
}

export function getDemoJobById(id: number): JobWithDetails | null {
  return DEMO_JOBS.find(j => j.id === id) || null;
}
