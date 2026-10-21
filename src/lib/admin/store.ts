import { get, put } from "@vercel/blob";
import type { AdminState, Row, Seed, TxState, TxStatus } from "./types";

/**
 * Everything lives in a PRIVATE Vercel Blob store (nothing in the repo,
 * nothing on a public URL). Files are read back only through the
 * authenticated /admin/api/file route.
 *
 *   foris-admin/transactions.json   seed (imported from the dashboard)
 *   foris-admin/state.json          done / notes / status overrides / attachments
 *   foris-admin/invoices/<id>/...   uploaded invoices
 */
const PREFIX = "foris-admin";
const SEED = `${PREFIX}/transactions.json`;
const STATE = `${PREFIX}/state.json`;
export const INVOICE_PREFIX = `${PREFIX}/invoices/`;

export function blobToken(): string | undefined {
  return process.env.FORIS_ADMIN_READ_WRITE_TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN;
}

export function storeConfigured(): boolean {
  return !!blobToken();
}

async function readJson<T>(pathname: string): Promise<T | null> {
  const res = await get(pathname, { access: "private", useCache: false, token: blobToken() });
  if (!res || res.statusCode !== 200) return null;
  const text = await new Response(res.stream).text();
  return JSON.parse(text) as T;
}

async function writeJson(pathname: string, data: unknown): Promise<void> {
  await put(pathname, JSON.stringify(data), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
    token: blobToken(),
  });
}

export async function loadSeed(): Promise<Seed | null> {
  return readJson<Seed>(SEED);
}

export async function loadState(): Promise<AdminState> {
  return (await readJson<AdminState>(STATE)) ?? { items: {} };
}

const STATUSES: TxStatus[] = ["found", "missing", "not_needed"];

export function validateSeed(data: unknown): Seed {
  const d = data as Seed;
  if (!d || !Array.isArray(d.transactions)) throw new Error("Geen transactions array");
  for (const t of d.transactions) {
    if (typeof t.id !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(t.date) || typeof t.amount !== "number")
      throw new Error(`Ongeldige regel: ${JSON.stringify(t).slice(0, 80)}`);
    if (!STATUSES.includes(t.status)) throw new Error(`Ongeldige status bij ${t.id}`);
  }
  return d;
}

export async function saveSeed(seed: Seed): Promise<void> {
  await writeJson(SEED, seed);
}

export async function updateItem(id: string, patch: Partial<TxState>): Promise<void> {
  const state = await loadState();
  const now = new Date().toISOString();
  state.items[id] = { ...state.items[id], ...patch, updatedAt: now };
  state.updatedAt = now;
  await writeJson(STATE, state);
}

export async function storeInvoice(id: string, file: File): Promise<void> {
  const safe = file.name.replace(/[^\w.\- ]+/g, "_").slice(0, 120) || "factuur";
  const blob = await put(`${INVOICE_PREFIX}${id}/${safe}`, file, {
    access: "private",
    addRandomSuffix: true,
    contentType: file.type || "application/octet-stream",
    token: blobToken(),
  });
  const state = await loadState();
  const prev = state.items[id]?.attachments ?? [];
  await updateItem(id, {
    attachments: [
      ...prev,
      { pathname: blob.pathname, name: safe, size: file.size, uploadedAt: new Date().toISOString() },
    ],
  });
}

export async function readFile(pathname: string) {
  return get(pathname, { access: "private", useCache: false, token: blobToken() });
}

export function mergeRows(seed: Seed, state: AdminState): Row[] {
  return seed.transactions
    .map((t) => {
      const s = state.items[t.id] ?? {};
      return {
        ...t,
        done: !!s.done,
        userNote: s.note ?? "",
        effectiveStatus: s.status ?? t.status,
        attachments: s.attachments ?? [],
      };
    })
    .sort((a, b) => (a.date === b.date ? a.amount - b.amount : a.date.localeCompare(b.date)));
}
