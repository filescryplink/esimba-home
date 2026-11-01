import { createClient, type Client } from "@libsql/client";

let client: Client | null = null;

/**
 * Mock-first adapter. It returns null until both Turso variables exist,
 * so local preview never requires production credentials.
 */
export function getTursoClient(): Client | null {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  if (!url || !authToken) return null;
  client ??= createClient({ url, authToken });
  return client;
}

export function isTursoConfigured() {
  return Boolean(process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN);
}
