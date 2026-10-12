import crypto from 'crypto';
import type { TeamUser, Job, TimeEntry, JobPhoto, JobWithDetails, TimeEntryWithDetails } from './types';

let pg: any = null;

export async function getDb() {
  if (!process.env.POSTGRES_URL) {
    return null;
  }
  
  if (!pg) {
    const { neon } = await import('@neondatabase/serverless');
    pg = neon(process.env.POSTGRES_URL);
  }
  
  return pg;
}

export async function executeQuery<T = any>(query: string, params: any[] = []): Promise<T[]> {
  const db = await getDb();
  if (!db) {
    throw new Error('Database not configured');
  }
  
  return await db(query, params);
}

export async function getUserByEmail(email: string): Promise<TeamUser | null> {
  const db = await getDb();
  if (!db) return null;
  
  const results = await db(
    'SELECT * FROM team_users WHERE email = $1 AND active = true LIMIT 1',
    [email]
  ) as TeamUser[];
  
  return results.length > 0 ? results[0] : null;
}

export async function getUserById(id: number): Promise<TeamUser | null> {
  const db = await getDb();
  if (!db) return null;
  
  const results = await db(
    'SELECT * FROM team_users WHERE id = $1 LIMIT 1',
    [id]
  ) as TeamUser[];
  
  return results.length > 0 ? results[0] : null;
}

export async function createAuthToken(userId: number): Promise<string> {
  const db = await getDb();
  if (!db) throw new Error('Database not configured');
  
  const token = crypto.randomUUID();
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
  
  await db(
    'INSERT INTO auth_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
    [userId, tokenHash, expiresAt]
  );
  
  return token;
}

export async function verifyAuthToken(token: string): Promise<TeamUser | null> {
  const db = await getDb();
  if (!db) return null;
  
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
  
  const results = await db(
    `SELECT t.*, u.id as user_id, u.email, u.name, u.role, u.active, u.created_at as user_created_at, u.updated_at as user_updated_at
     FROM auth_tokens t
     JOIN team_users u ON t.user_id = u.id
     WHERE t.token = $1 AND t.expires_at > NOW() AND t.used_at IS NULL
     LIMIT 1`,
    [tokenHash]
  ) as any[];
  
  if (results.length === 0) return null;
  
  const row = results[0];
  
  await db('UPDATE auth_tokens SET used_at = NOW() WHERE token = $1', [tokenHash]);
  
  return {
    id: row.user_id,
    email: row.email,
    name: row.name,
    role: row.role as 'admin' | 'worker',
    active: row.active,
    created_at: row.user_created_at,
    updated_at: row.user_updated_at
  };
}

export async function getJobsForWorker(workerId: number, startDate?: Date, endDate?: Date): Promise<JobWithDetails[]> {
  const db = await getDb();
  if (!db) return [];
  
  let query = `
    SELECT j.*, 
           w.name as worker_name,
           c.name as creator_name
    FROM jobs j
    LEFT JOIN team_users w ON j.assigned_to = w.id
    JOIN team_users c ON j.created_by = c.id
    WHERE j.assigned_to = $1
  `;
  
  const params: any[] = [workerId];
  
  if (startDate) {
    params.push(startDate);
    query += ` AND j.job_date >= $${params.length}`;
  }
  
  if (endDate) {
    params.push(endDate);
    query += ` AND j.job_date <= $${params.length}`;
  }
  
  query += ' ORDER BY j.job_date ASC, j.start_time ASC';
  
  return await db(query, params) as JobWithDetails[];
}

export async function getAllJobs(startDate?: Date, endDate?: Date): Promise<JobWithDetails[]> {
  const db = await getDb();
  if (!db) return [];
  
  let query = `
    SELECT j.*, 
           w.name as worker_name,
           c.name as creator_name
    FROM jobs j
    LEFT JOIN team_users w ON j.assigned_to = w.id
    JOIN team_users c ON j.created_by = c.id
    WHERE 1=1
  `;
  
  const params: any[] = [];
  
  if (startDate) {
    params.push(startDate);
    query += ` AND j.job_date >= $${params.length}`;
  }
  
  if (endDate) {
    params.push(endDate);
    query += ` AND j.job_date <= $${params.length}`;
  }
  
  query += ' ORDER BY j.job_date ASC, j.start_time ASC';
  
  return await db(query, params) as JobWithDetails[];
}

export async function getJobById(id: number): Promise<JobWithDetails | null> {
  const db = await getDb();
  if (!db) return null;
  
  const results = await db(
    `SELECT j.*, 
            w.name as worker_name,
            c.name as creator_name
     FROM jobs j
     LEFT JOIN team_users w ON j.assigned_to = w.id
     JOIN team_users c ON j.created_by = c.id
     WHERE j.id = $1
     LIMIT 1`,
    [id]
  ) as JobWithDetails[];
  
  return results.length > 0 ? results[0] : null;
}

export async function createJob(job: Omit<Job, 'id' | 'created_at' | 'updated_at' | 'status'>): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error('Database not configured');
  
  const results = await db(
    `INSERT INTO jobs (job_date, start_time, estimated_hours, client_name, client_address, client_phone, task_description, notes, created_by, assigned_to)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     RETURNING id`,
    [
      job.job_date,
      job.start_time,
      job.estimated_hours,
      job.client_name,
      job.client_address,
      job.client_phone,
      job.task_description,
      job.notes,
      job.created_by,
      job.assigned_to
    ]
  ) as { id: number }[];
  
  return results[0].id;
}

export async function getTimeEntriesForWorker(workerId: number, startDate?: Date, endDate?: Date): Promise<TimeEntryWithDetails[]> {
  const db = await getDb();
  if (!db) return [];
  
  let query = `
    SELECT te.*,
           j.job_date, j.start_time as job_start_time, j.estimated_hours, j.client_name, j.client_address, j.task_description,
           w.name as worker_name,
           CASE 
             WHEN te.end_time IS NOT NULL THEN
               EXTRACT(EPOCH FROM (te.end_time::time - te.start_time::time)) / 3600 - (te.break_minutes / 60.0)
             ELSE 0
           END as total_hours
    FROM time_entries te
    JOIN jobs j ON te.job_id = j.id
    JOIN team_users w ON te.worker_id = w.id
    WHERE te.worker_id = $1
  `;
  
  const params: any[] = [workerId];
  
  if (startDate) {
    params.push(startDate);
    query += ` AND te.entry_date >= $${params.length}`;
  }
  
  if (endDate) {
    params.push(endDate);
    query += ` AND te.entry_date <= $${params.length}`;
  }
  
  query += ' ORDER BY te.entry_date DESC, te.start_time DESC';
  
  const results = await db(query, params) as any[];
  
  return results.map(row => ({
    id: row.id,
    job_id: row.job_id,
    worker_id: row.worker_id,
    entry_date: row.entry_date,
    start_time: row.start_time,
    end_time: row.end_time,
    break_minutes: row.break_minutes,
    notes: row.notes,
    approved: row.approved,
    approved_by: row.approved_by,
    approved_at: row.approved_at,
    created_at: row.created_at,
    updated_at: row.updated_at,
    worker_name: row.worker_name,
    total_hours: row.total_hours,
    job: {
      id: row.job_id,
      job_date: row.job_date,
      start_time: row.job_start_time,
      estimated_hours: row.estimated_hours,
      client_name: row.client_name,
      client_address: row.client_address,
      task_description: row.task_description,
    } as any,
    photos: []
  }));
}

export async function createTimeEntry(entry: Omit<TimeEntry, 'id' | 'created_at' | 'updated_at' | 'approved' | 'approved_by' | 'approved_at'>): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error('Database not configured');
  
  const results = await db(
    `INSERT INTO time_entries (job_id, worker_id, entry_date, start_time, end_time, break_minutes, notes)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id`,
    [
      entry.job_id,
      entry.worker_id,
      entry.entry_date,
      entry.start_time,
      entry.end_time,
      entry.break_minutes,
      entry.notes
    ]
  ) as { id: number }[];
  
  return results[0].id;
}

export async function updateTimeEntry(id: number, updates: Partial<Pick<TimeEntry, 'end_time' | 'break_minutes' | 'notes'>>): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error('Database not configured');
  
  const fields: string[] = [];
  const values: any[] = [];
  let paramIndex = 1;
  
  if (updates.end_time !== undefined) {
    fields.push(`end_time = $${paramIndex++}`);
    values.push(updates.end_time);
  }
  
  if (updates.break_minutes !== undefined) {
    fields.push(`break_minutes = $${paramIndex++}`);
    values.push(updates.break_minutes);
  }
  
  if (updates.notes !== undefined) {
    fields.push(`notes = $${paramIndex++}`);
    values.push(updates.notes);
  }
  
  if (fields.length === 0) return;
  
  fields.push(`updated_at = CURRENT_TIMESTAMP`);
  values.push(id);
  
  await db(
    `UPDATE time_entries SET ${fields.join(', ')} WHERE id = $${paramIndex}`,
    values
  );
}

export async function addJobPhoto(timeEntryId: number, blobUrl: string, caption?: string): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error('Database not configured');
  
  const results = await db(
    `INSERT INTO job_photos (time_entry_id, blob_url, caption)
     VALUES ($1, $2, $3)
     RETURNING id`,
    [timeEntryId, blobUrl, caption]
  ) as { id: number }[];
  
  return results[0].id;
}

export async function getAllWorkers(): Promise<TeamUser[]> {
  const db = await getDb();
  if (!db) return [];
  
  return await db(
    'SELECT * FROM team_users WHERE role = $1 AND active = true ORDER BY name ASC',
    ['worker']
  ) as TeamUser[];
}

export async function createUser(email: string, name: string, role: 'admin' | 'worker'): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error('Database not configured');
  
  const results = await db(
    `INSERT INTO team_users (email, name, role, active)
     VALUES ($1, $2, $3, true)
     RETURNING id`,
    [email, name, role]
  ) as { id: number }[];
  
  return results[0].id;
}

export async function deactivateUser(id: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error('Database not configured');
  
  await db('UPDATE team_users SET active = false WHERE id = $1', [id]);
}
