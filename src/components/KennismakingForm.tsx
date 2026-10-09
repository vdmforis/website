"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitKennismaking, type ContactState } from "@/lib/actions";
import type { Locale } from "@/lib/i18n";
import { formUi, preferenceIds, preferenceLabels } from "@/i18n/forms";

const initialState: ContactState = { status: "idle" };

export function KennismakingForm({ locale = "nl" }: { locale?: Locale }) {
  const t = formUi[locale];
  const [state, formAction, isPending] = useActionState(
    submitKennismaking,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-card p-6 shadow-sm">
        <p className="font-heading text-2xl text-navy">{t.received}</p>
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
      <input type="hidden" name="locale" value={locale} />
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
        <Label htmlFor="preference" className="text-navy">
          {t.kennismaking.preference}
        </Label>
        <select
          id="preference"
          name="preference"
          defaultValue=""
          className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
        >
          <option value="">{t.kennismaking.noPreference}</option>
          {preferenceIds.map((id) => (
            <option key={id} value={id}>
              {preferenceLabels[locale][id]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message" className="text-navy">
          {t.kennismaking.message}{" "}
          <span className="text-muted-foreground">{t.optional}</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder={t.kennismaking.messagePlaceholder}
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
        {isPending ? t.sending : t.kennismaking.submit}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        {t.kennismaking.note}
      </p>
    </form>
  );
}
