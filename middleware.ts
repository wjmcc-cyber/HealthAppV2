import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Mock middleware — passthrough for UI demo mode
  // Replace with real auth session checks when connecting a backend
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
