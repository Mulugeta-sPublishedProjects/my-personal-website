import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  // Regex for static/public asset extensions
  const assetPattern = /\.(js|css|png|jpg|jpeg|gif|svg|woff2?|ttf|eot|ico)$/;

  // Check if path is a Next.js build asset or public asset
  if (pathname.startsWith("/_next/static") || assetPattern.test(pathname)) {
    return withCacheHeaders();
  }

  return NextResponse.next();
}

// Helper to apply long-term caching
function withCacheHeaders(): NextResponse {
  const response = NextResponse.next();
  response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return response;
}
