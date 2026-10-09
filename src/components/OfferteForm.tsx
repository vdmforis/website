"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitOfferte, type ContactState } from "@/lib/actions";
import type { Locale } from "@/lib/i18n";
import { dienstIds, dienstLabels, formUi } from "@/i18n/forms";

const initialState: ContactState = { status: "idle" };

export function OfferteForm({
  defaultDienst,
  locale = "nl",
}: {
  defaultDienst?: string;
  locale?: Locale;
}) {
  const t = formUi[locale];
  const DIENSTEN = dienstIds.map((id) => ({ id, label: dienstLabels[locale][id] }));
  const [state, formAction, isPending] = useActionState(
    submitOfferte,
    initialState,
  );
  const [dienst, setDienst] = useState<string>(
    DIENSTEN.some((d) => d.id === defaultDienst) ? defaultDienst! : "",
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-card p-8 text-center shadow-sm">
        <p className="font-heading text-2xl text-navy">{t.received}</p>
        <p className="mt-3 text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  const fieldErrors = state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <input type="hidden" name="locale" value={locale} />
      <fieldset>
        <legend className="font-heading text-lg text-navy">
          {t.offerte.legend}
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
                value={d.id}
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
            {t.name}
          </Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className="mt-1"
            aria-invalid={Boolean(fieldErrors.name)}
          />
          {fieldErrors.name && (
            <p className="mt-1 text-sm text-destructive">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-navy">
            {t.email}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className="mt-1"
            aria-invalid={Boolean(fieldErrors.email)}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-sm text-destructive">{fieldErrors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="text-navy">
            {t.phone}{" "}
            <span className="text-muted-foreground">{t.optional}</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-navy">
            {t.offerte.message}{" "}
            <span className="text-muted-foreground">{t.optional}</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={3}
            placeholder={t.offerte.messagePlaceholder}
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
          {isPending ? t.sending : t.offerte.submit}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          {t.offerte.note}
        </p>
      </div>
    </form>
  );
}
