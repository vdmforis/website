# Private admin: /admin

Bookkeeping dashboard for Van der Meulen Foris B.V.: every ABN AMRO transaction with
its invoice status (factuur aanwezig / ontbreekt / niet nodig), ticking off, notes and
invoice uploads. Not linked from the site, `noindex` (meta + `X-Robots-Tag`),
`Cache-Control: private, no-store`, and the public header/footer are hidden on `/admin`.

No bank data or invoices live in this repo. Everything is stored in a **private**
Vercel Blob store and is only served through authenticated routes.

## Setup (Vercel project `web`)

1. **Storage → Create → Blob**, access **Private**, name e.g. `foris-admin`.
   Connect it to project `web` (Production + Preview) with env var prefix
   `FORIS_ADMIN`, which creates `FORIS_ADMIN_READ_WRITE_TOKEN`.
   (Falls back to `BLOB_READ_WRITE_TOKEN` only if that store is private.)
2. **Settings → Environment Variables**: add `ADMIN_PASSWORD` (at least 10 characters,
   Sensitive) for Production and Preview. Optional: `ADMIN_SESSION_SECRET` (random string).
   Without `ADMIN_PASSWORD` the admin stays closed.
3. Redeploy.
4. Open `/admin`, log in, upload `transactions.json` (kept off the repo).

## Storage layout (private Blob)

- `foris-admin/transactions.json`: the transaction list (re-upload to replace;
  ticks, notes and uploads are kept per transaction id)
- `foris-admin/state.json`: done / notes / status overrides / attachments
- `foris-admin/invoices/<id>/...`: uploaded invoices (PDF or photo, max 4 MB)

## Routes

- `/admin/login`: password login, 12 h httpOnly session cookie scoped to `/admin`
- `/admin`: dashboard (filters by status, month, ticked, search; totals per status)
- `/admin/api/import` (POST JSON), `/admin/api/upload` (POST form),
  `/admin/api/file?p=` (GET, streams a private invoice), `/admin/api/export` (CSV)

All API routes return 401 without a valid session.
