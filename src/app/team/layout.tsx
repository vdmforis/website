import { runMigrations } from '@/lib/db/migrate';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

let migrationRun = false;

export default async function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!migrationRun && process.env.POSTGRES_URL) {
    try {
      await runMigrations();
      migrationRun = true;
    } catch (error) {
      console.error('[team] Auto-migration failed:', error);
    }
  }
  
  return <>{children}</>;
}
