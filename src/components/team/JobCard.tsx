import Link from 'next/link';
import type { JobWithDetails } from '@/lib/db/types';
import { team } from '@/i18n/team';

export function JobCard({ job }: { job: JobWithDetails }) {
  const jobDate = new Date(job.job_date);
  const isToday = jobDate.toDateString() === new Date().toDateString();
  
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    };
    return date.toLocaleDateString('es-ES', options);
  };
  
  return (
    <Link
      href={`/team/jobs/${job.id}`}
      className="block bg-card border border-border hover:border-primary/50 rounded-lg p-4 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 truncate">
            {job.client_name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {job.task_description}
          </p>
        </div>
        
        {isToday && (
          <span className="flex-shrink-0 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
            Hoy
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{formatDate(jobDate)}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{job.start_time}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span>{job.estimated_hours}h</span>
        </div>
      </div>
      
      {job.worker_name && (
        <div className="mt-2 pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground">
            Asignado a {job.worker_name}
          </span>
        </div>
      )}
    </Link>
  );
}
