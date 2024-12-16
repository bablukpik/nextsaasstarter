import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { DB_PATHS } from './constants';
import { db, dbConn } from './db-config';

const runMigrate = async () => {
  try {
    console.log('⏳ INFO: Running migrations...');
    const start = Date.now();

    // Fetch existing tables (optional)
    const existingTables = await dbConn`
      SELECT tablename 
      FROM pg_catalog.pg_tables 
      WHERE schemaname = 'public'
    `;

    if (existingTables.length > 0) {
      console.log('⚠️  WARNING: Found existing tables:');
      existingTables.forEach((table) => {
        console.log(`   - ${table.tablename}`);
      });
    }

    // Run migrations
    await migrate(db, {
      migrationsFolder: DB_PATHS.MIGRATIONS,
    });

    const end = Date.now();
    console.log(`✅ INFO: Migrations completed in ${end - start}ms`);
  } catch (error) {
    console.error('❌ ERROR: Migration failed');
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    // Explicitly terminate on error
    process.exit(1);
  } finally {
    await dbConn.end();
    console.log('🔒 INFO: Database connection closed');
  }
};

runMigrate();
