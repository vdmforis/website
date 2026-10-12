import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { TeamUser } from '@/lib/db/types';
import { getUserByEmail, createAuthToken, verifyAuthToken, getUserById } from '@/lib/db/client';
import { getDemoUserByEmail, DEMO_USERS } from '@/lib/db/demo-data';
import crypto from 'crypto';

const SESSION_COOKIE = 'team_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 15 * 60 * 1000;

function isDemoMode(): boolean {
  const hasDb = !!process.env.POSTGRES_URL;
  const isProduction = process.env.VERCEL_ENV === 'production';
  return !hasDb && !isProduction;
}

function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = loginAttempts.get(identifier);
  
  if (!record || now > record.resetAt) {
    loginAttempts.set(identifier, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function sendMagicLink(email: string, ip?: string): Promise<{ success: boolean; error?: string; demoMode?: boolean }> {
  try {
    const hasDb = !!process.env.POSTGRES_URL;
    const isProduction = process.env.VERCEL_ENV === 'production';
    
    if (isProduction && !hasDb) {
      return { 
        success: false, 
        error: 'El portal del equipo no está configurado. Contacta con el administrador.' 
      };
    }
    
    const identifier = ip || email;
    if (!checkRateLimit(identifier)) {
      return { 
        success: false, 
        error: 'Demasiados intentos. Espera 15 minutos e inténtalo de nuevo.' 
      };
    }
    
    let user = await getUserByEmail(email);
    let demoMode = false;
    
    if (!user && isDemoMode()) {
      user = getDemoUserByEmail(email);
      demoMode = true;
    }
    
    if (!user) {
      return { success: false, error: 'Usuario no encontrado' };
    }
    
    if (demoMode) {
      return { 
        success: true, 
        demoMode: true,
      };
    }
    
    const token = await createAuthToken(user.id);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                   (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    const magicLink = `${baseUrl}/team/auth/verify?token=${token}`;
    
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from = process.env.CONTACT_FROM_EMAIL || 'Foris <noreply@vdmforis.com>';
      
      await resend.emails.send({
        from,
        to: email,
        subject: 'Tu enlace de acceso al portal del equipo',
        html: `
          <p>Hola ${user.name},</p>
          <p>Haz clic en el siguiente enlace para acceder al portal del equipo:</p>
          <p><a href="${magicLink}">${magicLink}</a></p>
          <p>Este enlace expira en 15 minutos y solo se puede usar una vez.</p>
          <p>Si no has solicitado este enlace, puedes ignorar este correo.</p>
        `
      });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error sending magic link:', error);
    return { success: false, error: 'Error al enviar el correo' };
  }
}

export async function verifyMagicLink(token: string): Promise<TeamUser | null> {
  const isProduction = process.env.VERCEL_ENV === 'production';
  
  if (token.startsWith('demo-')) {
    if (isProduction) {
      return null;
    }
    
    if (!isDemoMode()) {
      return null;
    }
    
    const userId = parseInt(token.split('-')[1]);
    return DEMO_USERS.find(u => u.id === userId) || null;
  }
  
  return await verifyAuthToken(token);
}

export async function createSession(user: TeamUser) {
  const sessionData = JSON.stringify({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  });
  
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, sessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE,
    path: '/team'
  });
}

export async function getSession(): Promise<TeamUser | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE);
  
  if (!sessionCookie) {
    return null;
  }
  
  try {
    const sessionData = JSON.parse(sessionCookie.value);
    
    const user = await getUserById(sessionData.id);
    if (user && user.active) {
      return user;
    }
    
    const demoUser = DEMO_USERS.find(u => u.id === sessionData.id);
    if (demoUser && demoUser.active) {
      return demoUser;
    }
    
    return null;
  } catch {
    return null;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function requireAuth(): Promise<TeamUser> {
  const user = await getSession();
  if (!user) {
    redirect('/team');
  }
  return user;
}

export async function requireAdmin(): Promise<TeamUser> {
  const user = await requireAuth();
  if (user.role !== 'admin') {
    redirect('/team/dashboard');
  }
  return user;
}

export function isDemoModeForUser(user: TeamUser): boolean {
  if (process.env.VERCEL_ENV === 'production') {
    return false;
  }
  return isDemoMode() && DEMO_USERS.some(u => u.id === user.id);
}
