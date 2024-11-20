import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  const url = request.nextUrl.clone();

  // Apply caching for static assets in _next/static
  if (url.pathname.startsWith("/_next/static")) {
    const response = NextResponse.next();
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
    return response;
  }

  // Apply caching for files in the public folder
  if (
    url.pathname.startsWith("/public") ||
    /\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/.test(url.pathname)
  ) {
    const response = NextResponse.next();
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
    return response;
  }

  // Default response for other paths
  return NextResponse.next();
}
