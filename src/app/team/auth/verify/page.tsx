import { redirect } from 'next/navigation';
import { verifyMagicLink, createSession } from '@/lib/team/auth';

export const metadata = {
  title: 'Verificación',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  
  if (!token) {
    redirect('/team');
  }
  
  const user = await verifyMagicLink(token);
  
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            
            <h1 className="text-xl font-heading font-bold text-foreground mb-2">
              Enlace no válido
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              El enlace ha expirado o ya ha sido usado. Por favor, solicita uno nuevo.
            </p>
            
            <a
              href="/team"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2.5 px-6 rounded-lg transition-colors"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  await createSession(user);
  redirect('/team/dashboard');
}
