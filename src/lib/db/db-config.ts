import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

// Returns a connection with configurable options
export const createConnection = (connectionString: string, opts = {}) => {
  if (!connectionString) throw new Error('DATABASE_URL is not defined');
  return postgres(connectionString, {
    idle_timeout: 30000,
    max_lifetime: 30000,
    ...opts,
  });
};

export const dbConn = createConnection(process.env.DATABASE_URL!);

// Create a drizzle instance
export const db = drizzle(dbConn, { schema, logger: true });
