import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { DB_PATHS } from './src/lib/db/constants';

export default defineConfig({
  schema: DB_PATHS.SCHEMA,
  out: DB_PATHS.MIGRATIONS,
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  casing: 'snake_case',
  strict: true,
  verbose: true,
});
