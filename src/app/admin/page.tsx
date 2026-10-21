import { requireAdmin } from "@/lib/admin/auth";
import { loadSeed, loadState, mergeRows, storeConfigured } from "@/lib/admin/store";
import { logoutAction } from "@/lib/admin/actions";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { ImportSeed } from "@/components/admin/ImportSeed";

export default async function AdminPage() {
  await requireAdmin();

  const header = (
    <header className="flex items-center justify-between border-b border-black px-6 py-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">VDM Foris · Transacties en facturen</h1>
        <p className="text-xs">ABN AMRO NL09 ABNA 0148 8952 04 · privé, niet delen</p>
      </div>
      <form action={logoutAction}>
        <button className="border border-black px-3 py-1 text-sm hover:bg-black hover:text-white">
          Uitloggen
        </button>
      </form>
    </header>
  );

  if (!storeConfigured()) {
    return (
      <main>
        {header}
        <p className="p-6 text-sm">
          Opslag is nog niet gekoppeld. Maak in Vercel een private Blob store aan, koppel hem aan dit
          project met prefix FORIS_ADMIN (env var FORIS_ADMIN_READ_WRITE_TOKEN) en deploy opnieuw.
        </p>
      </main>
    );
  }

  let error: string | null = null;
  let seed = null;
  let state = null;
  try {
    [seed, state] = await Promise.all([loadSeed(), loadState()]);
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <main>
      {header}
      {error && <p className="p-6 text-sm">Kon de opslag niet lezen: {error}</p>}
      {!error && !seed && (
        <div className="p-6">
          <p className="mb-4 text-sm">Nog geen transacties geladen. Upload transactions.json om te beginnen.</p>
          <ImportSeed />
        </div>
      )}
      {seed && state && (
        <AdminDashboard rows={mergeRows(seed, state)} generated={seed.generated ?? ""} source={seed.source ?? ""} />
      )}
    </main>
  );
}
