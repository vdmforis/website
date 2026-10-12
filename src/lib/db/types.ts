export type UserRole = 'admin' | 'worker';
export type JobStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

export interface TeamUser {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface AuthToken {
  id: number;
  user_id: number;
  token: string;
  expires_at: Date;
  used_at: Date | null;
  created_at: Date;
}

export interface Job {
  id: number;
  job_date: Date;
  start_time: string;
  estimated_hours: number;
  client_name: string;
  client_address: string;
  client_phone: string | null;
  task_description: string;
  notes: string | null;
  created_by: number;
  assigned_to: number | null;
  status: JobStatus;
  created_at: Date;
  updated_at: Date;
}

export interface TimeEntry {
  id: number;
  job_id: number;
  worker_id: number;
  entry_date: Date;
  start_time: string;
  end_time: string | null;
  break_minutes: number;
  notes: string | null;
  approved: boolean;
  approved_by: number | null;
  approved_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface JobPhoto {
  id: number;
  time_entry_id: number;
  blob_url: string;
  caption: string | null;
  uploaded_at: Date;
}

export interface JobWithDetails extends Job {
  worker_name?: string;
  creator_name: string;
}

export interface TimeEntryWithDetails extends TimeEntry {
  job: Job;
  worker_name: string;
  total_hours: number;
  photos: JobPhoto[];
}
