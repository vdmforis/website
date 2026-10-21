"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/admin/actions";

export function LoginForm() {
  const [error, action, pending] = useActionState(loginAction, null);
  return (
    <form action={action} className="mt-6 space-y-3">
      <label className="block text-sm" htmlFor="password">
        Wachtwoord
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        className="w-full border border-black px-3 py-2"
      />
      {error && <p className="text-sm">{error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {pending ? "Bezig..." : "Inloggen"}
      </button>
    </form>
  );
}
