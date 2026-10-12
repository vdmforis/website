import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession, isDemoModeForUser } from '@/lib/team/auth';
import { getJobsForWorker, getAllJobs } from '@/lib/db/client';
import { getDemoJobsForWorker } from '@/lib/db/demo-data';
import { team } from '@/i18n/team';
import { TeamHeader } from '@/components/team/TeamHeader';
import { JobCard } from '@/components/team/JobCard';

export const metadata = {
  title: 'Dashboard del Equipo',
  robots: {
    index: false,
    follow: false,
  },
};

function getWeekStart() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(now.setDate(diff));
}

function getWeekEnd() {
  const start = getWeekStart();
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return end;
}

export default async function DashboardPage() {
  const user = await getSession();
  
  if (!user) {
    redirect('/team');
  }
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const weekStart = getWeekStart();
  weekStart.setHours(0, 0, 0, 0);
  
  const weekEnd = getWeekEnd();
  weekEnd.setHours(23, 59, 59, 999);
  
  let todayJobs, weekJobs;
  
  if (isDemoModeForUser(user)) {
    if (user.role === 'admin') {
      todayJobs = getDemoJobsForWorker(2, today, tomorrow);
      weekJobs = getDemoJobsForWorker(2, weekStart, weekEnd);
    } else {
      todayJobs = getDemoJobsForWorker(user.id, today, tomorrow);
      weekJobs = getDemoJobsForWorker(user.id, weekStart, weekEnd);
    }
  } else {
    if (user.role === 'admin') {
      todayJobs = await getAllJobs(today, tomorrow);
      weekJobs = await getAllJobs(weekStart, weekEnd);
    } else {
      todayJobs = await getJobsForWorker(user.id, today, tomorrow);
      weekJobs = await getJobsForWorker(user.id, weekStart, weekEnd);
    }
  }
  
  return (
    <div className="min-h-screen bg-background">
      <TeamHeader user={user} />
      
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground mb-1">
            {team.dashboard.welcome.replace('{name}', user.name)}
          </h1>
          {isDemoModeForUser(user) && (
            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-3 py-1 mt-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-xs font-medium text-muted-foreground">
                {team.login.demoMode}
              </span>
            </div>
          )}
        </div>
        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-heading font-semibold text-foreground">
              {team.dashboard.today}
            </h2>
            {user.role === 'admin' && (
              <Link
                href="/team/admin/jobs/new"
                className="text-sm text-primary hover:underline font-medium"
              >
                {team.dashboard.createJob}
              </Link>
            )}
          </div>
          
          {todayJobs.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground">
                {team.dashboard.noJobsMessage}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {todayJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </section>
        
        <section>
          <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
            {team.dashboard.thisWeek}
          </h2>
          
          {weekJobs.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground">
                {team.dashboard.noJobsMessage}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {weekJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </section>
        
        <div className="grid grid-cols-2 gap-3 pt-4">
          <Link
            href="/team/hours"
            className="bg-card border border-border hover:border-primary/50 rounded-lg p-4 text-center transition-colors"
          >
            <div className="text-2xl mb-1">⏱️</div>
            <div className="text-sm font-medium text-foreground">
              {team.dashboard.myHours}
            </div>
          </Link>
          
          {user.role === 'admin' && (
            <Link
              href="/team/admin"
              className="bg-card border border-border hover:border-primary/50 rounded-lg p-4 text-center transition-colors"
            >
              <div className="text-2xl mb-1">⚙️</div>
              <div className="text-sm font-medium text-foreground">
                {team.dashboard.manageTeam}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
