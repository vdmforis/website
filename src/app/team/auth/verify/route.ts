import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyMagicLink } from '@/lib/team/auth';

const SESSION_COOKIE = 'team_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  
  if (!token) {
    return NextResponse.redirect(new URL('/team', request.url));
  }
  
  const user = await verifyMagicLink(token);
  
  if (!user) {
    return NextResponse.redirect(new URL('/team?error=invalid_token', request.url));
  }
  
  // Create session
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
  
  return NextResponse.redirect(new URL('/team/dashboard', request.url));
}
