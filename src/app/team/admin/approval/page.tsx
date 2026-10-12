import { redirect } from 'next/navigation';
import { requireAdmin, isDemoModeForUser } from '@/lib/team/auth';
import { team } from '@/i18n/team';
import { TeamHeader } from '@/components/team/TeamHeader';
import { ApprovalView } from '@/components/team/ApprovalView';

export const metadata = {
  title: 'Aprobar Horas',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ApprovalPage() {
  const user = await requireAdmin();
  
  return (
    <div className="min-h-screen bg-background">
      <TeamHeader user={user} />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-6">
          {team.admin.timeApproval}
        </h1>
        
        {isDemoModeForUser(user) && (
          <div className="bg-secondary border border-border rounded-lg p-4 mb-6">
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
                  No se pueden aprobar horas en modo demostración.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <ApprovalView isDemoMode={isDemoModeForUser(user)} />
      </div>
    </div>
  );
}
