import { getDb } from './client';

export async function runMigrations(): Promise<{ success: boolean; error?: string }> {
  try {
    const db = await getDb();
    
    if (!db) {
      return { 
        success: false, 
        error: 'Database not configured (POSTGRES_URL missing)' 
      };
    }
    
    const adminEmail = process.env.TEAM_ADMIN_EMAIL || 'info@vdmforis.com';
    
    await db(`
      -- Team Portal Schema for VDM Foris
      -- Idempotent migrations

      -- Users table: team members (admin and workers)
      CREATE TABLE IF NOT EXISTS team_users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'worker')),
        active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Magic link tokens for authentication (hashed at rest)
      CREATE TABLE IF NOT EXISTS auth_tokens (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES team_users(id) ON DELETE CASCADE,
        token VARCHAR(255) UNIQUE NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        used_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Jobs (trabajos): assigned tasks for workers
      CREATE TABLE IF NOT EXISTS jobs (
        id SERIAL PRIMARY KEY,
        job_date DATE NOT NULL,
        start_time TIME NOT NULL,
        estimated_hours DECIMAL(4,2) NOT NULL,
        client_name VARCHAR(255) NOT NULL,
        client_address TEXT NOT NULL,
        client_phone VARCHAR(50),
        task_description TEXT NOT NULL,
        notes TEXT,
        created_by INTEGER NOT NULL REFERENCES team_users(id),
        assigned_to INTEGER REFERENCES team_users(id),
        status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in_progress', 'completed', 'cancelled')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Time entries: workers log their hours per job
      CREATE TABLE IF NOT EXISTS time_entries (
        id SERIAL PRIMARY KEY,
        job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
        worker_id INTEGER NOT NULL REFERENCES team_users(id),
        entry_date DATE NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME,
        break_minutes INTEGER DEFAULT 0,
        notes TEXT,
        approved BOOLEAN DEFAULT false,
        approved_by INTEGER REFERENCES team_users(id),
        approved_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Photos: attached to time entries
      CREATE TABLE IF NOT EXISTS job_photos (
        id SERIAL PRIMARY KEY,
        time_entry_id INTEGER NOT NULL REFERENCES time_entries(id) ON DELETE CASCADE,
        blob_url TEXT NOT NULL,
        caption TEXT,
        uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      -- Indexes for performance
      CREATE INDEX IF NOT EXISTS idx_jobs_date ON jobs(job_date);
      CREATE INDEX IF NOT EXISTS idx_jobs_assigned ON jobs(assigned_to);
      CREATE INDEX IF NOT EXISTS idx_time_entries_date ON time_entries(entry_date);
      CREATE INDEX IF NOT EXISTS idx_time_entries_worker ON time_entries(worker_id);
      CREATE INDEX IF NOT EXISTS idx_time_entries_job ON time_entries(job_id);
      CREATE INDEX IF NOT EXISTS idx_auth_tokens_token ON auth_tokens(token);
      CREATE INDEX IF NOT EXISTS idx_auth_tokens_user ON auth_tokens(user_id);

      -- Initial admin user (idempotent)
      INSERT INTO team_users (email, name, role, active) 
      VALUES ($1, 'Dennis', 'admin', true)
      ON CONFLICT (email) DO NOTHING;
    `, [adminEmail]);
    
    console.log('[migrate] Database migrations completed successfully');
    return { success: true };
  } catch (error) {
    console.error('[migrate] Migration failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}
