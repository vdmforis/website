"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact, type ContactState } from "@/lib/actions";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/i18n/ui";

const initialState: ContactState = { status: "idle" };

export function HeroForm({ locale = "nl" }: { locale?: Locale }) {
  const t = ui[locale].form;
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-card p-6 shadow-sm">
        <p className="font-heading text-2xl text-navy">{t.success}</p>
        <p className="mt-2 text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

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
        <Label htmlFor="message" className="text-navy">
          {t.message} <span className="text-muted-foreground">{t.optional}</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          className="mt-1"
        />
      </div>

      {state.status === "error" && !Object.keys(fieldErrors).length && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-terracotta text-cream hover:bg-terracotta/90 h-12 text-base"
      >
        {isPending ? t.sending : t.submit}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        {t.note}
      </p>
    </form>
  );
}
