import { cookies } from 'next/headers';
import crypto from 'crypto';

const COOKIE_NAME = 'calio_admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'calio2026';

function getSecret() {
  return process.env.ADMIN_SECRET || 'calio-ro-secret-change-me-in-prod';
}

function sign(value: string): string {
  const hmac = crypto.createHmac('sha256', getSecret());
  hmac.update(value);
  return hmac.digest('hex');
}

export function createSessionToken(): string {
  const ts = Date.now().toString();
  const sig = sign(ts);
  return `${ts}.${sig}`;
}

export function verifySessionToken(token: string): boolean {
  const [ts, sig] = token.split('.');
  if (!ts || !sig) return false;
  const expected = sign(ts);
  if (sig !== expected) return false;
  // token valid for 7 days
  const age = Date.now() - parseInt(ts, 10);
  return age < 1000 * 60 * 60 * 24 * 7;
}

export async function isAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}

export async function requireAdmin() {
  if (!(await isAdmin())) {
    throw new Error('Unauthorized');
  }
}

export function setAdminCookie() {
  const token = createSessionToken();
  // Note: in route handler we return Set-Cookie header
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}`;
}

export function clearAdminCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}
