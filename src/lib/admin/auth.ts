import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Private admin login for vdmforis.com/admin.
 * One shared password in the ADMIN_PASSWORD env var (Vercel project settings).
 * The session cookie is an HMAC over its expiry, keyed on that password,
 * so changing the password logs every session out.
 * Without ADMIN_PASSWORD the admin is closed; it never falls back to open.
 */
const COOKIE = "foris_admin";
const MAX_AGE = 60 * 60 * 12; // 12 hours

const attempts = new Map<string, { count: number; resetAt: number }>();

function password(): string | null {
  const p = process.env.ADMIN_PASSWORD;
  return p && p.length >= 8 ? p : null;
}

export function adminConfigured(): boolean {
  return password() !== null;
}

function key(): Buffer {
  const p = password();
  if (!p) throw new Error("ADMIN_PASSWORD not configured");
  const secret = process.env.ADMIN_SESSION_SECRET ?? "";
  return crypto.createHash("sha256").update(`foris-admin|${secret}|${p}`).digest();
}

function sign(exp: number): string {
  return crypto.createHmac("sha256", key()).update(String(exp)).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const ha = crypto.createHash("sha256").update(a).digest();
  const hb = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(ha, hb);
}

export function rateLimited(id: string): boolean {
  const now = Date.now();
  const r = attempts.get(id);
  if (!r || now > r.resetAt) {
    attempts.set(id, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return false;
  }
  r.count += 1;
  return r.count > 5;
}

export function checkPassword(input: string): boolean {
  const p = password();
  if (!p) return false;
  return safeEqual(input, p);
}

export async function startSession(): Promise<void> {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE;
  const jar = await cookies();
  jar.set(COOKIE, `${exp}.${sign(exp)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: MAX_AGE,
  });
}

export async function endSession(): Promise<void> {
  const jar = await cookies();
  jar.delete({ name: COOKIE, path: "/admin" });
}

export async function isAdmin(): Promise<boolean> {
  if (!adminConfigured()) return false;
  const jar = await cookies();
  const raw = jar.get(COOKIE)?.value;
  if (!raw) return false;
  const [expStr, mac] = raw.split(".");
  const exp = Number(expStr);
  if (!exp || !mac || exp < Date.now() / 1000) return false;
  return safeEqual(mac, sign(exp));
}

export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/login");
}
