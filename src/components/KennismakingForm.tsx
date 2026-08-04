"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitKennismaking, type ContactState } from "@/lib/actions";

const initialState: ContactState = { status: "idle" };

const PREFERENCES = [
  "Doordeweeks overdag",
  "Doordeweeks 's avonds",
  "In het weekend",
];

export function KennismakingForm() {
  const [state, formAction, isPending] = useActionState(
    submitKennismaking,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-card p-6 shadow-sm">
        <p className="font-heading text-2xl text-navy">Aanvraag ontvangen</p>
        <p className="mt-2 text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  const fieldErrors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
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
        <Label htmlFor="phone" className="text-navy">
          Telefoonnummer{" "}
          <span className="text-muted-foreground">(optioneel)</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+31 6 …"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="preference" className="text-navy">
          Wanneer schikt het meestal?
        </Label>
        <select
          id="preference"
          name="preference"
          defaultValue=""
          className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
        >
          <option value="">Geen voorkeur</option>
          {PREFERENCES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message" className="text-navy">
          Waar wil je het over hebben?{" "}
          <span className="text-muted-foreground">(optioneel)</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Bijvoorbeeld: regio, nieuwbouwproject, of waar je staat in het proces."
          className="mt-1"
        />
      </div>

      {state.status === "error" && !Object.keys(fieldErrors).length && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="h-12 w-full bg-terracotta text-base text-cream hover:bg-terracotta/90"
      >
        {isPending ? "Versturen…" : "Vraag een kennismaking aan"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We stellen binnen één werkdag per e-mail een tijdstip voor. Gratis, 30
        minuten, geen verplichtingen.
      </p>
    </form>
  );
}
