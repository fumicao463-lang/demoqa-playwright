import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

function required(key: string): string {
  const value = process.env[key];
  if (value === undefined || value === '') {
    throw new Error(
      `Missing required environment variable "${key}". ` +
        `Copy .env.example to .env and fill it in.`,
    );
  }
  return value;
}

export const env = {
  ENV: process.env.ENV ?? 'staging',
  BASE_URL: required('BASE_URL'),
} as const;
