import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!fonts|components|$).*)"],
};

const protectedRoutes = ["/regist", /^\/community(?:\/|$)/, "/createStoreImage"]; // 로그인 유저만 접근할 수 있는 페이지
const publicRoutes = ["/login"]; // 로그인 유저는 접근할 수 없는 페이지

export function middleware(request: NextRequest) {
    const token = request.cookies.get('Authorization');
    const currentPath = request.nextUrl.pathname;
    
    console.log("Token:", token); 
  
    // 쿠키에 담긴 token의 유효성은 검사하지 않고있음... 로직 추가 필요

    if (!token && protectedRoutes.some(route => currentPath.match(route))) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  
    if (token && publicRoutes.includes(currentPath)) {
      const url = request.nextUrl.clone();
      url.pathname = "/main";
      return NextResponse.redirect(url);
    }
  
    return NextResponse.next();
  }
  
