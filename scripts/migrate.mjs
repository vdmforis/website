#!/usr/bin/env node

/**
 * Run database migrations for the team portal.
 * Usage: npm run db:migrate
 */

import { runMigrations } from '../src/lib/db/migrate.ts';

async function main() {
  console.log('Running team portal database migrations...');
  
  const result = await runMigrations();
  
  if (result.success) {
    console.log('✅ Migrations completed successfully');
    process.exit(0);
  } else {
    console.error('❌ Migration failed:', result.error);
    process.exit(1);
  }
}

main();
