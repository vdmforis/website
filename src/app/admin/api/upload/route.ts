import { NextResponse, type NextRequest } from "next/server";
import { isAdmin } from "@/lib/admin/auth";
import { loadSeed, storeInvoice } from "@/lib/admin/store";

export const dynamic = "force-dynamic";

const MAX = 4 * 1024 * 1024; // Vercel function body limit is ~4.5 MB
const TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp", "image/heic"];

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  const form = await req.formData();
  const id = String(form.get("id") ?? "");
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "Geen bestand" }, { status: 400 });
  if (file.size > MAX) return NextResponse.json({ error: "Bestand groter dan 4 MB" }, { status: 400 });
  if (file.type && !TYPES.includes(file.type))
    return NextResponse.json({ error: "Alleen PDF of foto" }, { status: 400 });
  const seed = await loadSeed();
  if (!seed?.transactions.some((t) => t.id === id))
    return NextResponse.json({ error: "Onbekende transactie" }, { status: 400 });
  await storeInvoice(id, file);
  return NextResponse.json({ ok: true });
}
