import { NextResponse } from "next/server";

export async function middleware(request) {
    request.nextUrl.pathname = '/en/111' + request.nextUrl.pathname
    return NextResponse.rewrite(request.nextUrl)
}
