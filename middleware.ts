import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
    const token = await getToken({ 
        req: request,
        secret: process.env.NEXTAUTH_SECRET 
    })

    const pathname = request.nextUrl.pathname

    // Routes protégées
    const protectedRoutes = ['/trips', '/reservations', '/properties', '/favorites']
    
    // Vérifier si la route actuelle est protégée
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    // Si route protégée et pas de token, rediriger vers la page d'accueil
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