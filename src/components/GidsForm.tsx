"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { requestGids, type GidsState } from "@/lib/gids-action";
import { whatsappLink } from "@/lib/contact";
import type { Locale } from "@/lib/i18n";
import { formUi, processIds, processLabels } from "@/i18n/forms";

const initialState: GidsState = { status: "idle" };

export function GidsForm({ locale = "nl" }: { locale?: Locale }) {
  const t = formUi[locale];
  const [state, formAction, isPending] = useActionState(
    requestGids,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-olive/30 bg-card p-8 shadow-sm">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
          {t.gids.successEyebrow}
        </p>
        <p className="mt-2 font-heading text-2xl text-navy">{t.gids.successTitle}</p>
        <p className="mt-3 text-foreground/80">{state.message}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          {t.gids.questions}{" "}
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta hover:underline"
          >
            {t.gids.whatsapp}
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
        <Label htmlFor="process" className="text-navy">
          {t.gids.process}{" "}
          <span className="text-muted-foreground">{t.optional}</span>
        </Label>
        <select
          id="process"
          name="process"
          className="mt-1 flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 md:text-sm"
        >
          <option value="">{t.gids.choose}</option>
          {processIds.map((id) => (
            <option key={id} value={id}>
              {processLabels[locale][id]}
            </option>
          ))}
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
        {isPending ? t.sending : t.gids.submit}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        {t.gids.note}
      </p>
    </form>
  );
}
