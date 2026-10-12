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
  
  const isProduction = process.env.VERCEL_ENV === 'production';
  const hasDb = !!process.env.POSTGRES_URL;
  
  if (isProduction && !hasDb) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg p-8 text-center shadow-sm">
            <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-destructive"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            
            <h1 className="text-xl font-heading font-bold text-foreground mb-2">
              Portal No Configurado
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              El portal del equipo no está configurado. Por favor, contacta con el administrador del sistema.
            </p>
            
            <a
              href="mailto:info@vdmforis.com"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2.5 px-6 rounded-lg transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    );
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
