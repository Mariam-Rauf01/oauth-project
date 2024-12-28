import { NextRequest, NextResponse } from 'next/server';
import auth from './auth'; // Corrected import for default export

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the user is authenticated by looking for the next-auth session token
  const sessionToken = req.cookies.get('next-auth.session-token');

  // If the user is not authenticated, redirect to the login page
  if (pathname.startsWith('/dashboard') && !sessionToken) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect unauthenticated users
  }

  // Continue with NextAuth middleware processing
  return auth(req); // Continue with the default auth handler
}

export const config = {
  matcher: ['/dashboard'],
};
