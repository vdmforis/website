import { NextResponse, type NextRequest } from "next/server";
import { isAdmin } from "@/lib/admin/auth";
import { INVOICE_PREFIX, readFile } from "@/lib/admin/store";

export const dynamic = "force-dynamic";

/** Streams an uploaded invoice from the private store, only for a logged-in admin. */
export async function GET(req: NextRequest) {
  if (!(await isAdmin())) return new NextResponse("Niet ingelogd", { status: 401 });
  const p = req.nextUrl.searchParams.get("p") ?? "";
  if (!p.startsWith(INVOICE_PREFIX) || p.includes(".."))
    return new NextResponse("Niet gevonden", { status: 404 });
  const res = await readFile(p);
  if (!res || res.statusCode !== 200) return new NextResponse("Niet gevonden", { status: 404 });
  const name = p.split("/").pop() ?? "factuur";
  return new NextResponse(res.stream, {
    headers: {
      "Content-Type": res.blob.contentType,
      "Content-Disposition": `inline; filename="${name.replace(/"/g, "")}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
