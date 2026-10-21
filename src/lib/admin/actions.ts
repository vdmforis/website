"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { checkPassword, endSession, isAdmin, rateLimited, startSession } from "./auth";
import { updateItem } from "./store";
import type { TxStatus } from "./types";

export async function loginAction(_prev: string | null, form: FormData): Promise<string | null> {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return "Te veel pogingen. Probeer het over 15 minuten opnieuw.";
  const pw = String(form.get("password") ?? "");
  if (!checkPassword(pw)) return "Onjuist wachtwoord.";
  await startSession();
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await endSession();
  redirect("/admin/login");
}

async function guard() {
  if (!(await isAdmin())) throw new Error("Niet ingelogd");
}

export async function setDoneAction(id: string, done: boolean): Promise<void> {
  await guard();
  await updateItem(id, { done });
  revalidatePath("/admin");
}

export async function setNoteAction(id: string, note: string): Promise<void> {
  await guard();
  await updateItem(id, { note: note.slice(0, 2000) });
  revalidatePath("/admin");
}

export async function setStatusAction(id: string, status: TxStatus): Promise<void> {
  await guard();
  if (!["found", "missing", "not_needed"].includes(status)) throw new Error("Ongeldige status");
  await updateItem(id, { status });
  revalidatePath("/admin");
}
