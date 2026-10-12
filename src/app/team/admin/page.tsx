import { redirect } from 'next/navigation';
import Link from 'next/link';
import { requireAdmin, isDemoMode } from '@/lib/team/auth';
import { team } from '@/i18n/team';
import { TeamHeader } from '@/components/team/TeamHeader';

export const metadata = {
  title: 'Administración',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const user = await requireAdmin();
  
  return (
    <div className="min-h-screen bg-background">
      <TeamHeader user={user} />
      
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <h1 className="text-2xl font-heading font-bold text-foreground">
          {team.admin.title}
        </h1>
        
        {isDemoMode(user) && (
          <div className="bg-secondary border border-border rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {team.login.demoMode}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Las funciones de administración están limitadas en modo demostración.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid gap-4">
          <Link
            href="/team/admin/jobs/new"
            className="bg-card border border-border hover:border-primary/50 rounded-lg p-6 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {team.dashboard.createJob}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Crear un nuevo trabajo y asignarlo a un trabajador
                </p>
              </div>
              <svg
                className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
          
          <Link
            href="/team/admin/approval"
            className="bg-card border border-border hover:border-primary/50 rounded-lg p-6 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {team.admin.timeApproval}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Revisar y aprobar las horas registradas por los trabajadores
                </p>
              </div>
              <svg
                className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
          
          <Link
            href="/team/admin/reports"
            className="bg-card border border-border hover:border-primary/50 rounded-lg p-6 transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {team.admin.reports}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Ver informes y exportar datos para gestoría
                </p>
              </div>
              <svg
                className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
