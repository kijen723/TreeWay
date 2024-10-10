import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!fonts|components|$).*)"],
};

const protectedRoutes = ["/regist", "/createStoreImage", "/community", "/main/rating", "/main/industry", "/main/region", "/analyze"]; // 로그인 유저만 접근할 수 있는 페이지
const publicRoutes = ["/login"]; // 로그인 유저는 접근할 수 없는 페이지

export function middleware(request: NextRequest) {
    const isAuth = request.cookies.get('customUserDetails');
    const currentPath = request.nextUrl.pathname;

    if (!isAuth && protectedRoutes.some(route => currentPath.match(route))) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set('alert', 'loginRequired');
      return NextResponse.redirect(url);
    }

    if (isAuth && publicRoutes.includes(currentPath)) {
      const url = request.nextUrl.clone();
      url.pathname = "/loginCheck";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
