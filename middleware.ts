// middleware.ts - VERSION DEBUG
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('Middleware bypassed for debugging')
    return NextResponse.next()  // Laisse tout passer
}

export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ]
}