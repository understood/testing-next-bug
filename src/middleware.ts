import { NextResponse } from "next/server";

export async function middleware(request) {
    request.nextUrl.pathname = '/en/111'
    return NextResponse.rewrite(request.nextUrl)
}
