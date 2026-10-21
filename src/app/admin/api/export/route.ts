import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin/auth";
import { loadSeed, loadState, mergeRows } from "@/lib/admin/store";

export const dynamic = "force-dynamic";

const LABEL = { found: "factuur aanwezig", missing: "factuur ontbreekt", not_needed: "niet nodig" } as const;

function cell(v: string | number | boolean): string {
  const s = String(v);
  return /[;"\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** CSV for Regina / the gestor, including Dennis's ticks and notes. */
export async function GET() {
  if (!(await isAdmin())) return new NextResponse("Niet ingelogd", { status: 401 });
  const seed = await loadSeed();
  if (!seed) return new NextResponse("Geen data", { status: 404 });
  const rows = mergeRows(seed, await loadState());
  const head = ["datum", "bedrag", "tegenpartij", "omschrijving", "categorie", "status", "afgevinkt", "factuur", "geupload", "notitie", "mogelijk_prive"];
  const lines = rows.map((r) =>
    [
      r.date,
      r.amount.toFixed(2).replace(".", ","),
      r.counterparty,
      r.description,
      r.category,
      LABEL[r.effectiveStatus],
      r.done ? "ja" : "nee",
      r.invoice_file.split("/").pop() ?? "",
      r.attachments.map((a) => a.name).join(" | "),
      [r.note, r.userNote].filter(Boolean).join(" / "),
      r.likely_personal ? "ja" : "",
    ]
      .map(cell)
      .join(";"),
  );
  return new NextResponse("\uFEFF" + [head.join(";"), ...lines].join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="foris-transacties.csv"',
      "Cache-Control": "private, no-store",
    },
  });
}
