import {NextResponse} from "next/server";

const locales = ['en'];

function getLocale() {
    return "en";
}

export function middleware(request: any) {
    const {pathname} = request.nextUrl;

    if (pathname.startsWith('/videos/') || pathname.startsWith('/posters/') || pathname.startsWith('/_next/')) {
        return;
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    const locale = getLocale();
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next|videos|posters).*)'
    ],
};
