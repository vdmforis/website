import { NextResponse, type NextRequest } from "next/server";
import { isAdmin } from "@/lib/admin/auth";
import { saveSeed, validateSeed } from "@/lib/admin/store";

export const dynamic = "force-dynamic";

/** Replace the transaction list. Done/notes/attachments are kept per transaction id. */
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  try {
    const seed = validateSeed(await req.json());
    await saveSeed(seed);
    return NextResponse.json({ ok: true, count: seed.transactions.length });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Import mislukt" }, { status: 400 });
  }
}
