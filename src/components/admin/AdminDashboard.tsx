"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { setDoneAction, setNoteAction, setStatusAction } from "@/lib/admin/actions";
import { ImportSeed } from "@/components/admin/ImportSeed";
import type { Row, TxStatus } from "@/lib/admin/types";

const STATUS_LABEL: Record<TxStatus, string> = {
  found: "Factuur aanwezig",
  missing: "Factuur ontbreekt",
  not_needed: "Niet nodig",
};

const eur = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" });
const MONTHS = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const monthLabel = (m: string) => `${MONTHS[Number(m.slice(5, 7)) - 1]} ${m.slice(0, 4)}`;
const dateLabel = (d: string) => `${d.slice(8, 10)}-${d.slice(5, 7)}-${d.slice(0, 4)}`;

export function AdminDashboard({ rows: initial, generated, source }: { rows: Row[]; generated: string; source: string }) {
  const router = useRouter();
  // Optimistic edits on top of the server rows; server data wins again after a refresh.
  const [overrides, setOverrides] = useState<Record<string, Partial<Row>>>({});
  const rows = useMemo(() => initial.map((r) => ({ ...r, ...overrides[r.id] })), [initial, overrides]);
  const [status, setStatus] = useState<TxStatus | "all">("missing");
  const [month, setMonth] = useState("all");
  const [doneFilter, setDoneFilter] = useState<"all" | "open" | "done">("open");
  const [q, setQ] = useState("");
  const [, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const months = useMemo(() => [...new Set(initial.map((r) => r.month))].sort(), [initial]);

  const filtered = rows.filter(
    (r) =>
      (status === "all" || r.effectiveStatus === status) &&
      (month === "all" || r.month === month) &&
      (doneFilter === "all" || (doneFilter === "done" ? r.done : !r.done)) &&
      (!q ||
        `${r.counterparty} ${r.description} ${r.category} ${r.note} ${r.userNote}`
          .toLowerCase()
          .includes(q.toLowerCase())),
  );

  // Totals over month filter only, so the status cards stay comparable.
  const inMonth = rows.filter((r) => month === "all" || r.month === month);
  const totals = (["found", "missing", "not_needed"] as TxStatus[]).map((s) => {
    const list = inMonth.filter((r) => r.effectiveStatus === s);
    return {
      s,
      count: list.length,
      open: list.filter((r) => !r.done).length,
      out: list.filter((r) => r.amount < 0).reduce((a, r) => a + r.amount, 0),
      inn: list.filter((r) => r.amount > 0).reduce((a, r) => a + r.amount, 0),
    };
  });
  const filteredSum = filtered.reduce((a, r) => a + r.amount, 0);

  function patch(id: string, p: Partial<Row>) {
    setOverrides((prev) => ({ ...prev, [id]: { ...prev[id], ...p } }));
  }
  function run(fn: () => Promise<void>) {
    setError(null);
    startTransition(async () => {
      try {
        await fn();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Opslaan mislukt");
        router.refresh();
      }
    });
  }

  async function upload(id: string, file: File) {
    const fd = new FormData();
    fd.set("id", id);
    fd.set("file", file);
    setError(null);
    const res = await fetch("/admin/api/upload", { method: "POST", body: fd });
    if (!res.ok) {
      const out = await res.json().catch(() => ({}));
      setError(out.error ?? "Upload mislukt");
      return;
    }
    router.refresh();
  }

  return (
    <div className="px-6 py-6">
      <section className="grid gap-3 sm:grid-cols-3">
        {totals.map((t) => (
          <button
            key={t.s}
            onClick={() => setStatus(t.s)}
            className={`border border-black p-4 text-left ${status === t.s ? "bg-black text-white" : "hover:bg-neutral-100"}`}
          >
            <div className="text-xs uppercase tracking-wide">{STATUS_LABEL[t.s]}</div>
            <div className="mt-1 text-2xl font-semibold">{t.count}</div>
            <div className="text-xs">
              {t.open} open · uit {eur.format(-t.out)} · in {eur.format(t.inn)}
            </div>
          </button>
        ))}
      </section>

      <section className="mt-6 flex flex-wrap items-end gap-3 text-sm">
        <Field label="Status">
          <select value={status} onChange={(e) => setStatus(e.target.value as TxStatus | "all")} className="border border-black px-2 py-1">
            <option value="all">Alles</option>
            {Object.entries(STATUS_LABEL).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </Field>
        <Field label="Maand">
          <select value={month} onChange={(e) => setMonth(e.target.value)} className="border border-black px-2 py-1">
            <option value="all">Alle maanden</option>
            {months.map((m) => (
              <option key={m} value={m}>{monthLabel(m)}</option>
            ))}
          </select>
        </Field>
        <Field label="Afgevinkt">
          <select value={doneFilter} onChange={(e) => setDoneFilter(e.target.value as "all" | "open" | "done")} className="border border-black px-2 py-1">
            <option value="open">Nog open</option>
            <option value="done">Afgevinkt</option>
            <option value="all">Alles</option>
          </select>
        </Field>
        <Field label="Zoeken">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Leroy, Sklum..." className="border border-black px-2 py-1" />
        </Field>
        <div className="ml-auto flex items-center gap-2">
          <a href="/admin/api/export" download className="border border-black px-3 py-1 hover:bg-black hover:text-white">CSV export</a>
          <ImportSeed compact />
        </div>
      </section>

      {error && <p className="mt-4 border border-black p-2 text-sm">{error}</p>}

      <p className="mt-4 text-xs">
        {filtered.length} regels · saldo {eur.format(filteredSum)}
        {generated && ` · lijst van ${generated}`}
        {source && ` · bron: ${source}`}
      </p>

      <div className="mt-2 overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-black text-left text-xs uppercase tracking-wide">
              <th className="py-2 pr-2">Klaar</th>
              <th className="py-2 pr-2">Datum</th>
              <th className="py-2 pr-2 text-right">Bedrag</th>
              <th className="py-2 pr-2">Tegenpartij en omschrijving</th>
              <th className="py-2 pr-2">Status</th>
              <th className="py-2 pr-2">Factuur</th>
              <th className="py-2">Notitie</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className={`border-b border-neutral-300 align-top ${r.done ? "text-neutral-400" : ""}`}>
                <td className="py-2 pr-2">
                  <input
                    type="checkbox"
                    aria-label="Afvinken"
                    checked={r.done}
                    onChange={(e) => {
                      const done = e.target.checked;
                      patch(r.id, { done });
                      run(() => setDoneAction(r.id, done));
                    }}
                    className="h-4 w-4 accent-black"
                  />
                </td>
                <td className="whitespace-nowrap py-2 pr-2">{dateLabel(r.date)}</td>
                <td className={`whitespace-nowrap py-2 pr-2 text-right tabular-nums ${r.amount > 0 ? "font-semibold" : ""}`}>
                  {eur.format(r.amount)}
                </td>
                <td className="py-2 pr-2">
                  <div className="font-medium">{r.counterparty}</div>
                  <div className="text-xs">{r.description}</div>
                  <div className="text-xs text-neutral-500">
                    {r.category}
                    {r.likely_personal && " · mogelijk privé"}
                  </div>
                </td>
                <td className="py-2 pr-2">
                  <select
                    value={r.effectiveStatus}
                    onChange={(e) => {
                      const s = e.target.value as TxStatus;
                      patch(r.id, { effectiveStatus: s });
                      run(() => setStatusAction(r.id, s));
                    }}
                    className={`border border-black px-1 py-0.5 text-xs ${r.effectiveStatus === "missing" ? "bg-black text-white" : ""}`}
                  >
                    {Object.entries(STATUS_LABEL).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </td>
                <td className="max-w-[220px] py-2 pr-2 text-xs">
                  {r.invoice_file && <div className="break-words" title={r.invoice_file}>RushFiles: {r.invoice_file.split("/").pop()}</div>}
                  {r.attachments.map((a) => (
                    <div key={a.pathname}>
                      <a className="underline" href={`/admin/api/file?p=${encodeURIComponent(a.pathname)}`} target="_blank" rel="noreferrer">
                        {a.name}
                      </a>
                    </div>
                  ))}
                  <label className="mt-1 inline-block cursor-pointer underline">
                    + factuur
                    <input
                      type="file"
                      accept="application/pdf,image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && upload(r.id, e.target.files[0])}
                    />
                  </label>
                </td>
                <td className="min-w-[200px] py-2">
                  {r.note && <div className="mb-1 text-xs text-neutral-500">{r.note}</div>}
                  <textarea
                    defaultValue={r.userNote}
                    rows={1}
                    placeholder="Notitie"
                    onBlur={(e) => {
                      const note = e.target.value;
                      if (note === r.userNote) return;
                      patch(r.id, { userNote: note });
                      run(() => setNoteAction(r.id, note));
                    }}
                    className="w-full border border-neutral-400 px-2 py-1 text-xs focus:border-black focus:outline-none"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="py-6 text-sm">Niets te tonen met deze filters.</p>}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs uppercase tracking-wide">{label}</span>
      {children}
    </label>
  );
}
