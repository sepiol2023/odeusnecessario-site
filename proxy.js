import { NextResponse } from "next/server";

const LOCALE_COOKIE = "locale";

function getPreferredLocale(request) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale === "pt" || cookieLocale === "en") {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const primary = acceptLanguage.toLowerCase();

  return primary.includes("pt") ? "pt" : "en";
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/en")) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, "en", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  if (pathname === "/") {
    const locale = getPreferredLocale(request);
    if (locale === "en") {
      const url = request.nextUrl.clone();
      url.pathname = "/en";
      const response = NextResponse.redirect(url);
      response.cookies.set(LOCALE_COOKIE, "en", {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
      return response;
    }
  }

  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, "pt", {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
