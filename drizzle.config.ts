import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// Load .env.local file (Next.js convention)
config({ path: '.env' });

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

