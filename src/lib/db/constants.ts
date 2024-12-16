import path from 'path';

export const DB_PATHS = {
  MIGRATIONS: path.join(process.cwd(), 'src', 'lib', 'db', 'migrations'),
  SCHEMA: path.join(process.cwd(), 'src', 'lib', 'db', 'schema.ts'),
} as const; 