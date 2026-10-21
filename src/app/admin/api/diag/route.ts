import { NextResponse, type NextRequest } from "next/server";
// TEMPORARY login diagnostics, removed in the next commit.
export async function POST(req: NextRequest) {
  const { pw } = (await req.json()) as { pw: string };
  const e = process.env.ADMIN_PASSWORD ?? "";
  const unq = e.trim().replace(/^["']|["']$/g, "");
  return NextResponse.json({
    envLen: e.length,
    inLen: pw.length,
    exact: e === pw,
    trimmed: e.trim() === pw.trim(),
    unquoted: unq === pw,
    startsWith: e.startsWith(pw),
    endsWith: e.endsWith(pw),
    includes: e.includes(pw),
  });
}
