"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { requestGids, type GidsState } from "@/lib/gids-action";

const initialState: GidsState = { status: "idle" };

export function GidsForm() {
  const [state, formAction, isPending] = useActionState(
    requestGids,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-card p-8 shadow-sm">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
          Onderweg
        </p>
        <p className="mt-2 font-heading text-2xl text-navy">De gids is gestuurd</p>
        <p className="mt-3 text-foreground/80">{state.message}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          Tijdens het lezen vragen?{" "}
          <a
            href="https://wa.me/31614967704"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            Stuur ons direct een WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
      noValidate
    >
      <div>
        <Label htmlFor="name" className="text-navy">
          Je naam
        </Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Voornaam en achternaam"
          className="mt-1"
          aria-invalid={Boolean(fieldErrors.name)}
        />
        {fieldErrors.name && (
          <p className="mt-1 text-sm text-destructive">{fieldErrors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-navy">
          E-mailadres
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jij@voorbeeld.nl"
          className="mt-1"
          aria-invalid={Boolean(fieldErrors.email)}
        />
        {fieldErrors.email && (
          <p className="mt-1 text-sm text-destructive">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="process" className="text-navy">
          Waar sta je in het proces?{" "}
          <span className="text-muted-foreground">(optioneel)</span>
        </Label>
        <select
          id="process"
          name="process"
          className="mt-1 flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 md:text-sm"
        >
          <option value="">— maak een keuze —</option>
          <option value="orienterend">Aan het oriënteren</option>
          <option value="zoekend">Actief op zoek</option>
          <option value="op-het-oog">Heb een huis op het oog</option>
          <option value="al-gekocht">Al gekocht, in het traject</option>
        </select>
      </div>

      {state.status === "error" && !Object.keys(fieldErrors).length && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-terracotta text-cream hover:bg-terracotta/90 h-12 text-base"
      >
        {isPending ? "Versturen…" : "Stuur me de gids · gratis"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Je krijgt de PDF direct in je inbox. We sturen je hierna geen
        ongevraagde nieuwsbrieven.
      </p>
    </form>
  );
}
