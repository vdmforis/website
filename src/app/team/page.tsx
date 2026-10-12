import { redirect } from 'next/navigation';
import { getSession } from '@/lib/team/auth';
import { TeamLoginForm } from '@/components/team/TeamLoginForm';

export const metadata = {
  title: 'Portal del Equipo',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function TeamLoginPage() {
  const user = await getSession();
  
  if (user) {
    redirect('/team/dashboard');
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Portal del Equipo
          </h1>
          <p className="text-muted-foreground">
            Acceso para el equipo de Foris
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <TeamLoginForm />
        </div>
      </div>
    </div>
  );
}
