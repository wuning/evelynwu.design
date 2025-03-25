import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fallbackLng, languages } from '@/lib/i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname has a supported language
  const pathnameHasLang = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLang) return;

  // Get user's preferred language from header or use fallback
  let locale = fallbackLng;
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLang = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase();
    if (languages.includes(preferredLang as any)) {
      locale = preferredLang;
    }
  }

  // Redirect if there is no language prefix
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|images).*)',
  ],
}; 