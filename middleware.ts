import { NextRequest, NextResponse } from "next/server";
import { getKota } from "@/app/lib/data";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "ruangamank3.id";

  if (
    !host ||
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === domain ||
    host === `www.${domain}`
  ) {
    return NextResponse.next();
  }

  let slug = "";
  if (host.endsWith(".localhost")) {
    slug = host.slice(0, -10);
  } else if (host.endsWith(`.${domain}`)) {
    slug = host.slice(0, -(`.${domain}`.length));
  }

  if (!slug) {
    return NextResponse.next();
  }

  const place = getKota(slug);
  if (!place) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith(`/kota/${slug}`)) {
    return NextResponse.next();
  }

  const targetPath = `/kota/${slug}${pathname === "/" ? "" : pathname}`;

  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ]
};
