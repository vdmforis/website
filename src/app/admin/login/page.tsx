import { redirect } from "next/navigation";
import { adminConfigured, isAdmin } from "@/lib/admin/auth";
import { LoginForm } from "@/components/admin/LoginForm";

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");
  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6">
      <h1 className="text-2xl font-semibold tracking-tight">VDM Foris admin</h1>
      {adminConfigured() ? (
        <LoginForm />
      ) : (
        <p className="mt-4 text-sm">
          De admin is nog niet ingesteld. Zet ADMIN_PASSWORD (minstens 10 tekens) in de Vercel
          projectinstellingen en deploy opnieuw.
        </p>
      )}
    </main>
  );
}
