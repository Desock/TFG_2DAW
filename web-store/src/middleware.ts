import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/dashboard/:path*", "/checkout/:path*", "/orders/:path*", "/profile/:path*"],
};


export function middleware(req: NextRequest) {
  const jwt = req.cookies.get("jwt")?.value;

  const protectedRoutes = ["/dashboard", "/checkout", "/orders", "/profile"];

  if (protectedRoutes.some((r) => req.nextUrl.pathname.startsWith(r))) {
    if (!jwt) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  return NextResponse.next();
}
