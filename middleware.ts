import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get credentials from environment variables
  const validUsername = process.env.AUTH_USERNAME || 'calvin123!';
  const validPassword = process.env.AUTH_PASSWORD || 'biochar123!';

  // Get the Authorization header
  const authHeader = request.headers.get('authorization');

  // If no auth header, request authentication
  if (!authHeader) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // Parse the Authorization header
  const auth = authHeader.split(' ')[1];
  const [username, password] = Buffer.from(auth, 'base64').toString().split(':');

  // Check credentials
  if (username === validUsername && password === validPassword) {
    return NextResponse.next();
  }

  // Invalid credentials
  return new NextResponse('Invalid credentials', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Apply middleware to all routes
export const config = {
  matcher: '/(.*)',
};
