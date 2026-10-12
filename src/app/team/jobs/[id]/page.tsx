import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { getSession, isDemoMode } from '@/lib/team/auth';
import { getJobById } from '@/lib/db/client';
import { getDemoJobById } from '@/lib/db/demo-data';
import { team } from '@/i18n/team';
import { TeamHeader } from '@/components/team/TeamHeader';

export const metadata = {
  title: 'Detalle del Trabajo',
  robots: {
    index: false,
    follow: false,
  },
};

function encodeAddress(address: string): string {
  return encodeURIComponent(address);
}

function formatPhone(phone: string): string {
  return phone.replace(/\s/g, '');
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await getSession();
  
  if (!user) {
    redirect('/team');
  }
  
  const { id } = await params;
  const jobId = parseInt(id);
  
  let job;
  
  if (isDemoMode(user)) {
    job = getDemoJobById(jobId);
  } else {
    job = await getJobById(jobId);
  }
  
  if (!job) {
    notFound();
  }
  
  const jobDate = new Date(job.job_date);
  const isToday = jobDate.toDateString() === new Date().toDateString();
  
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    };
    return date.toLocaleDateString('es-ES', options);
  };
  
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeAddress(job.client_address)}`;
  const callUrl = job.client_phone ? `tel:${formatPhone(job.client_phone)}` : null;
  const whatsappUrl = job.client_phone ? `https://wa.me/${formatPhone(job.client_phone).replace('+', '')}` : null;
  
  return (
    <div className="min-h-screen bg-background">
      <TeamHeader user={user} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        <Link
          href="/team/dashboard"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {team.jobs.backToList}
        </Link>
        
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="bg-primary/5 border-b border-border px-4 py-3 flex items-center justify-between">
            <h1 className="text-lg font-heading font-bold text-foreground">
              {job.client_name}
            </h1>
            {isToday && (
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                Hoy
              </span>
            )}
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {team.jobs.task}
              </label>
              <p className="mt-1 text-foreground">
                {job.task_description}
              </p>
            </div>
            
            {job.notes && (
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {team.jobs.notes}
                </label>
                <p className="mt-1 text-sm text-muted-foreground">
                  {job.notes}
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {team.jobs.date}
                </label>
                <p className="mt-1 text-sm text-foreground">
                  {formatDate(jobDate)}
                </p>
              </div>
              
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {team.jobs.time}
                </label>
                <p className="mt-1 text-sm text-foreground">
                  {job.start_time}
                </p>
              </div>
              
              <div>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {team.jobs.hours}
                </label>
                <p className="mt-1 text-sm text-foreground">
                  {job.estimated_hours} horas
                </p>
              </div>
              
              {job.worker_name && (
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {team.jobs.worker}
                  </label>
                  <p className="mt-1 text-sm text-foreground">
                    {job.worker_name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-card border border-border rounded-lg p-4">
          <h2 className="text-sm font-semibold text-foreground mb-3">
            {team.jobs.client}
          </h2>
          
          <div className="space-y-2">
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                {team.jobs.address}
              </label>
              <p className="text-sm text-foreground">
                {job.client_address}
              </p>
            </div>
            
            {job.client_phone && (
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  {team.jobs.phone}
                </label>
                <p className="text-sm text-foreground">
                  {job.client_phone}
                </p>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2.5 px-3 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {team.jobs.maps}
            </a>
            
            {callUrl && (
              <a
                href={callUrl}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2.5 px-3 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {team.jobs.call}
              </a>
            )}
            
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2.5 px-3 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            )}
          </div>
        </div>
        
        {user.role === 'worker' && (
          <Link
            href={`/team/hours/new?job=${job.id}`}
            className="block mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 px-4 rounded-lg text-center transition-colors"
          >
            {team.jobs.logTime}
          </Link>
        )}
      </div>
    </div>
  );
}
