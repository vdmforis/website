"use client";

import { useState } from "react";
import { contact, whatsappLink, mailLink } from "@/lib/contact";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div
          role="dialog"
          aria-label="Snelle contactopties"
          className="animate-in fade-in slide-in-from-bottom-2 w-72 origin-bottom-right rounded-2xl border border-border bg-card p-4 shadow-2xl"
        >
          <p className="font-heading text-base text-navy">Direct contact</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Eerste reactie binnen één werkdag. Een kennismaking is gratis.
          </p>
          <div className="mt-4 space-y-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M19.05 4.91A9.82 9.82 0 0 0 12 2C6.5 2 2.03 6.47 2.03 11.97a9.93 9.93 0 0 0 1.34 5L2 22l5.16-1.35a9.96 9.96 0 0 0 4.84 1.23h.01c5.5 0 9.97-4.47 9.97-9.97a9.91 9.91 0 0 0-2.93-7zM12 20.15h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.06.8.82-2.98-.2-.31a8.26 8.26 0 0 1-1.27-4.36c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.3.86 5.86 2.43a8.24 8.24 0 0 1 2.42 5.87c0 4.57-3.71 8.17-8.35 8.17zm4.56-6.18c-.25-.13-1.47-.73-1.7-.81-.22-.08-.39-.13-.55.13-.16.25-.63.81-.78.97-.14.16-.29.18-.54.05-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.13.16 1.73 2.64 4.19 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z" />
              </svg>
              WhatsApp ons
            </a>
            <a
              href={mailLink()}
              className="flex items-center gap-3 rounded-xl border border-border bg-cream px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-terracotta"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {contact.email}
            </a>
            <a
              href={contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl bg-terracotta px-4 py-3 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M3 10h18M8 2v4M16 2v4" />
              </svg>
              Plan een gesprek <span className="ml-auto text-xs">gratis</span>
            </a>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Sluit contactopties" : "Open contactopties"}
        className="flex h-14 items-center gap-2 rounded-full bg-navy px-5 text-cream shadow-xl transition-all hover:bg-navy/90 hover:scale-[1.02]"
      >
        {open ? (
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 6l12 12M6 18 18 6" />
          </svg>
        ) : (
          <>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="text-sm font-medium">Praat met ons</span>
          </>
        )}
      </button>
    </div>
  );
}
