// Don't use this for now path.join(process.cwd()) is not working in drizzle.config.ts file
export const DB_PATHS = {
  MIGRATIONS: './src/lib/db/migrations',
  MIGRATIONS_META: './src/lib/db/migrations/meta',
  SCHEMA: './src/lib/db/schema',
} as const;
