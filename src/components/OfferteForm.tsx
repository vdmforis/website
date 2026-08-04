"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitOfferte, type ContactState } from "@/lib/actions";

const initialState: ContactState = { status: "idle" };

export const DIENSTEN = [
  { id: "orientatie", label: "Oriëntatie & projectkeuze" },
  { id: "papierwinkel", label: "Papierwinkel — NIE, CIF, bank" },
  { id: "nieuwbouwtoezicht", label: "Nieuwbouwtoezicht" },
  { id: "aankoopbegeleiding", label: "Volledige aankoopbegeleiding" },
  { id: "concierge", label: "Concierge" },
  { id: "anders", label: "Weet ik nog niet / iets anders" },
] as const;

export function OfferteForm({ defaultDienst }: { defaultDienst?: string }) {
  const [state, formAction, isPending] = useActionState(
    submitOfferte,
    initialState,
  );
  const [dienst, setDienst] = useState(
    DIENSTEN.some((d) => d.id === defaultDienst) ? defaultDienst! : "",
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-card p-8 text-center shadow-sm">
        <p className="font-heading text-2xl text-navy">Aanvraag ontvangen</p>
        <p className="mt-3 text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  const fieldErrors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <fieldset>
        <legend className="font-heading text-lg text-navy">
          Waar wil je een offerte voor?
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {DIENSTEN.map((d) => (
            <label
              key={d.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition-colors ${
                dienst === d.id
                  ? "border-terracotta bg-terracotta/10 text-navy"
                  : "border-border bg-card text-foreground/85 hover:border-terracotta/50"
              }`}
            >
              <input
                type="radio"
                name="dienst"
                value={d.label}
                checked={dienst === d.id}
                onChange={() => setDienst(d.id)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={`h-3 w-3 shrink-0 rounded-full border ${
                  dienst === d.id
                    ? "border-terracotta bg-terracotta"
                    : "border-border"
                }`}
              />
              {d.label}
            </label>
          ))}
        </div>
        {fieldErrors.dienst && (
          <p className="mt-2 text-sm text-destructive">{fieldErrors.dienst}</p>
        )}
      </fieldset>

      <div className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
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
          <Label htmlFor="message" className="text-navy">
            Korte toelichting{" "}
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
          {isPending ? "Versturen…" : "Vraag offerte aan"}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Binnen één werkdag een offerte op maat. Vrijblijvend — je zit nergens
          aan vast.
        </p>
      </div>
    </form>
  );
}
