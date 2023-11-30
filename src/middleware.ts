import { jwtDecode } from 'jwt-decode';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

function middleware(request: Request) {
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-origin', origin);
  requestHeaders.set('x-pathname', pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default withAuth(middleware, {
  callbacks: {
    async authorized({ req, token }) {
      if (req.nextUrl.pathname.startsWith('/dashboard') && token === null)
        return false;
      else {
        if (
          !req.nextUrl.pathname.startsWith('/dashboard') &&
          (!token || !token.user)
        )
          return true;
        // @ts-ignore
        const decodedToken = jwtDecode(token?.user?.access_token);
        if (decodedToken && decodedToken.exp! < Date.now() / 1000) {
          return false;
        }
        return true;
      }
    },
  },
});
