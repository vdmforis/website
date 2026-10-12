import { redirect } from 'next/navigation';
import { requireAdmin, isDemoMode } from '@/lib/team/auth';
import { getAllWorkers } from '@/lib/db/client';
import { DEMO_USERS } from '@/lib/db/demo-data';
import { team } from '@/i18n/team';
import { TeamHeader } from '@/components/team/TeamHeader';
import { JobForm } from '@/components/team/JobForm';

export const metadata = {
  title: 'Crear Trabajo',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NewJobPage() {
  const user = await requireAdmin();
  
  let workers;
  
  if (isDemoMode(user)) {
    workers = DEMO_USERS.filter(u => u.role === 'worker' && u.active);
  } else {
    workers = await getAllWorkers();
  }
  
  return (
    <div className="min-h-screen bg-background">
      <TeamHeader user={user} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-6">
          {team.jobForm.title}
        </h1>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <JobForm workers={workers} isDemoMode={isDemoMode(user)} />
        </div>
      </div>
    </div>
  );
}
