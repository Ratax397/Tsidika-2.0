import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
    // Retrieve the token with the correct configuration
    const token = await getToken({ 
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
        cookieName: process.env.NODE_ENV === 'production' 
            ? '__Secure-next-auth.session-token' 
            : 'next-auth.session-token'
    })

    const pathname = request.nextUrl.pathname

    // Protected routes
    const protectedRoutes = ['/trips', '/reservations', '/properties', '/favorites']
    
    // Check if the current route is protected
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    // If the route is protected and there's no token, redirect to the homepage
    if (isProtectedRoute && !token) {
        const url = new URL('/', request.url)
        url.searchParams.set('callbackUrl', pathname)
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ]
}
