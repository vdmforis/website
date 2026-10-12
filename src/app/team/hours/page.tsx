import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession, isDemoModeForUser } from '@/lib/team/auth';
import { getTimeEntriesForWorker } from '@/lib/db/client';
import { getDemoTimeEntriesForWorker } from '@/lib/db/demo-data';
import { team } from '@/i18n/team';
import { TeamHeader } from '@/components/team/TeamHeader';

export const metadata = {
  title: 'Mis Horas',
  robots: {
    index: false,
    follow: false,
  },
};

function getWeekStart() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const start = new Date(now);
  start.setDate(diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

function getMonthStart() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  start.setHours(0, 0, 0, 0);
  return start;
}

export default async function HoursPage() {
  const user = await getSession();
  
  if (!user) {
    redirect('/team');
  }
  
  const weekStart = getWeekStart();
  const monthStart = getMonthStart();
  
  let weekEntries, monthEntries;
  
  if (isDemoModeForUser(user)) {
    weekEntries = getDemoTimeEntriesForWorker(user.id, weekStart);
    monthEntries = getDemoTimeEntriesForWorker(user.id, monthStart);
  } else {
    weekEntries = await getTimeEntriesForWorker(user.id, weekStart);
    monthEntries = await getTimeEntriesForWorker(user.id, monthStart);
  }
  
  const weekTotal = weekEntries.reduce((sum, entry) => sum + (entry.total_hours || 0), 0);
  const monthTotal = monthEntries.reduce((sum, entry) => sum + (entry.total_hours || 0), 0);
  
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    };
    return new Date(date).toLocaleDateString('es-ES', options);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <TeamHeader user={user} />
      
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
            {team.hours.title}
          </h1>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                {team.hours.thisWeek}
              </div>
              <div className="text-2xl font-bold text-foreground">
                {weekTotal.toFixed(1)}h
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                {team.hours.thisMonth}
              </div>
              <div className="text-2xl font-bold text-foreground">
                {monthTotal.toFixed(1)}h
              </div>
            </div>
          </div>
        </div>
        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-heading font-semibold text-foreground">
              Entradas recientes
            </h2>
          </div>
          
          {monthEntries.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground">
                {team.hours.noEntriesMessage}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {monthEntries.map((entry) => {
                const isToday = new Date(entry.entry_date).toDateString() === new Date().toDateString();
                
                return (
                  <div
                    key={entry.id}
                    className="bg-card border border-border rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">
                          {entry.job.client_name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {entry.job.task_description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-sm font-semibold text-foreground">
                          {entry.total_hours.toFixed(1)}h
                        </span>
                        {entry.approved ? (
                          <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                            ✓
                          </span>
                        ) : (
                          <span className="bg-secondary text-muted-foreground text-xs font-medium px-2 py-1 rounded-full">
                            ⏳
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{formatDate(entry.entry_date)}</span>
                      <span>{entry.start_time} - {entry.end_time || '...'}</span>
                      {entry.break_minutes > 0 && (
                        <span>Descanso: {entry.break_minutes} min</span>
                      )}
                    </div>
                    
                    {entry.notes && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {entry.notes}
                      </p>
                    )}
                    
                    {isToday && !entry.approved && (
                      <Link
                        href={`/team/hours/${entry.id}/edit`}
                        className="inline-block mt-3 text-xs text-primary hover:underline font-medium"
                      >
                        {team.hours.editEntry}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
