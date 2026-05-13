import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

  if (isMaintenanceMode) {
    const ADMIN_PATH = process.env.ADMIN_PATH ?? "";
    if (
      pathname !== "/maintenance" &&
      !pathname.startsWith("/_next") &&
      !pathname.startsWith("/api") &&
      !pathname.startsWith("/favicon") &&
      !(ADMIN_PATH && pathname.startsWith(`/${ADMIN_PATH}`))
    ) {
      const res = NextResponse.redirect(new URL("/maintenance", request.url));
      res.headers.set("x-vercel-cache", "no-cache");
      res.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
      return res;
    }
    return NextResponse.next();
  }

  const ADMIN_PATH = process.env.ADMIN_PATH!;
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  if (pathname.startsWith(`/${ADMIN_PATH}`)) {
    const token = request.cookies.get("admin_token")?.value;
    if (pathname === `/${ADMIN_PATH}/login`) {
      if (token) {
        return NextResponse.redirect(
          new URL(`/${ADMIN_PATH}/leads`, request.url)
        );
      }
      return NextResponse.next();
    }
    if (!token) {
      return NextResponse.redirect(
        new URL(`/${ADMIN_PATH}/login?unauthorized=1`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};