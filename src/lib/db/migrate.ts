import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { DB_PATHS } from './constants';
import { db, dbConn } from './db-config';

const runMigrate = async () => {
  console.log('⏳ Running migrations...');
  
  const start = Date.now();
  await migrate(db, { migrationsFolder: DB_PATHS.MIGRATIONS });
  const end = Date.now();

  console.log(`✅ Migrations completed in ${end - start}ms`);

  await dbConn.end();
  process.exit(0);
};

runMigrate().catch((err) => {
  console.error('❌ Migration failed');
  console.error(err);
  process.exit(1);
});
