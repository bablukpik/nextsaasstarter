import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';
import * as schema from './schema';

dotenv.config();

// Returns a connection with configurable options
export const createDbConnection = (connectionString: string, opts = {}) => {
  if (!connectionString) throw new Error('DATABASE_URL is not defined');

  // Set max connections to 1 for migrations and seeding to prevent conflicts
  // This is a good practice for data consistency since these operations should run sequentially
  let max = undefined;
  if ((process.env.DB_MIGRATING || process.env.DB_SEEDING)) {
    max = 1;
  }

  return postgres(connectionString, {
    idle_timeout: 30000,
    max_lifetime: 30000,
    max,
    ...opts,
  });
};

export const dbConn = createDbConnection(process.env.DATABASE_URL!);

// Create a drizzle instance
export const db = drizzle(dbConn, { schema, logger: true });
