import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const isAuth = !!token
  const isProtectedRoute = [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites",
  ].some((path) =>
    request.nextUrl.pathname.startsWith(path)
  )

  if (!isAuth && isProtectedRoute) {
    const url = new URL("/", request.url)
    url.searchParams.set("callbackUrl", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/trips/:path*",
    "/reservations/:path*",
    "/properties/:path*",
    "/favorites/:path*",
  ],
}
