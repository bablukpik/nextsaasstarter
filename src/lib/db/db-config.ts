import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const IDLE_TIMEOUT = 30000;
const MAX_LIFETIME = 30000;

// Set max connections to 1 for running migrations and seeding sequentially to prevent conflicts
export const db = drizzle({
  connection: {
    url: process.env.DATABASE_URL,
    max: (process.env.DB_MIGRATING || process.env.DB_SEEDING) ? 1 : undefined,
    idle_timeout: IDLE_TIMEOUT,
    max_lifetime: MAX_LIFETIME,
  },
  schema,
  casing: 'snake_case',
  logger: true,
});
