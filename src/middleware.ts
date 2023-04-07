import type {NextRequest} from 'next/server'
import {NextResponse} from "next/server"

export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname === '/'){
        return NextResponse.redirect(new URL('/main', request.url))
    }
}

export const config = {
    matcher: "/",
}
