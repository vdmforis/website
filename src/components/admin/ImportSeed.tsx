"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ImportSeed({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onFile(file: File) {
    setBusy(true);
    setMsg(null);
    try {
      const json = JSON.parse(await file.text());
      const res = await fetch("/admin/api/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json),
      });
      const out = await res.json();
      if (!res.ok) throw new Error(out.error ?? "Import mislukt");
      setMsg(`${out.count} transacties geladen.`);
      router.refresh();
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Import mislukt");
    } finally {
      setBusy(false);
    }
  }

  return (
    <label className={`inline-flex cursor-pointer items-center gap-2 border border-black px-3 py-1 text-sm hover:bg-black hover:text-white ${compact ? "" : "py-2"}`}>
      <input
        type="file"
        accept="application/json,.json"
        className="hidden"
        disabled={busy}
        onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
      />
      {busy ? "Laden..." : compact ? "Nieuwe lijst laden" : "transactions.json uploaden"}
      {msg && <span className="ml-2">{msg}</span>}
    </label>
  );
}
