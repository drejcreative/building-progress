import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - coming-soon (the coming soon page itself)
     * - files with extensions (static assets)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|coming-soon|.*\\.).*)",
  ],
};
