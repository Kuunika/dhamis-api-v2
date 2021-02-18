import { config } from 'dotenv';
config();

export function env(environmentVariable: string): string {
  return process.env[environmentVariable];
}
