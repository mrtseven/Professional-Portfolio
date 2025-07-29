import {NextRequest, NextResponse} from "next/server";
import {siteConfig} from "@/config/config";

export function middleware(request: NextRequest) {

    // Check If Don't Have Language Shortcode ex: en , fa ,... Put It after main Address
    // چک میکند که اگر بعد از نام دامنه اسم کوتاه زبان وجود نداشت آن را در ابتدا قرار میدهد

    const pathname = request.nextUrl.pathname

    const pathnameIsMissingLocale = siteConfig.languages.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );
    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(`/${siteConfig.languages.includes(siteConfig.defaultLanguage) ? siteConfig.defaultLanguage : siteConfig.languages[0]}/${pathname}`, request.url)
        );
    }
}


export const config = {
    matcher: [
        "/((?!api|assets|docs|.*\\..*|_next).*)",
    ],
};
