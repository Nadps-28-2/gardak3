import { NextRequest, NextResponse } from "next/server";
import { getKota } from "@/app/lib/data";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "gardak3.com";

  const addDebugHeaders = (response: NextResponse, slugVal?: string, targetVal?: string) => {
    response.headers.set("x-debug-host", host);
    response.headers.set("x-debug-subdomain", slugVal || "none");
    response.headers.set("x-debug-target", targetVal || "no-rewrite");
    response.headers.set("x-debug-mw-ran", "yes");
    return response;
  };

  if (
    !host ||
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === domain ||
    host === `www.${domain}`
  ) {
    return addDebugHeaders(NextResponse.next());
  }

  let slug = "";
  if (host.endsWith(".localhost")) {
    slug = host.slice(0, -10);
  } else if (host.endsWith(`.${domain}`)) {
    slug = host.slice(0, -(`.${domain}`.length));
  }

  if (!slug) {
    return addDebugHeaders(NextResponse.next());
  }

  const place = getKota(slug);
  if (!place) {
    return addDebugHeaders(new NextResponse("Not Found", { status: 404 }), slug, "404-not-found");
  }

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith(`/kota/${slug}`)) {
    return addDebugHeaders(NextResponse.next(), slug, "already-kota-prefix");
  }

  const targetPath = `/kota/${slug}${pathname === "/" ? "" : pathname}`;

  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  return addDebugHeaders(NextResponse.rewrite(url), slug, targetPath);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ]
};
