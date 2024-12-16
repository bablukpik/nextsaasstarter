import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { DB_PATHS } from './src/lib/db/constants';

dotenv.config();

export default {
  schema: DB_PATHS.SCHEMA,
  out: DB_PATHS.MIGRATIONS,
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
