package com.b107.treeway.oauth2.hadler;

import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.b107.treeway.oauth2.dto.CustomOAuth2User;
import com.b107.treeway.jwt.JWTUtil;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;

@Component
public class CustomSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final MemberRepository memberRepository;

    @Value("${custom.redirect-url}")
    private String redirectUrl;

    private final JWTUtil jwtUtil;

    public CustomSuccessHandler(JWTUtil jwtUtil, MemberRepository memberRepository) {

        this.jwtUtil = jwtUtil;
        this.memberRepository = memberRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        //OAuth2User
        CustomOAuth2User customUserDetails = (CustomOAuth2User) authentication.getPrincipal();
        System.out.println(customUserDetails);
        String memberName = customUserDetails.getUsername();
        String name = customUserDetails.getName();
        System.out.println("memberName: " + memberName);

        Member isExistingUser = memberRepository.findByMemberName(memberName);

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iterator = authorities.iterator();
        GrantedAuthority auth = iterator.next();
        String role = auth.getAuthority();

        String token = jwtUtil.createJwt(memberName,name, role, 60*60*60L);

        response.addCookie(createCookie("Authorization", token));
        System.out.println(isExistingUser.toString());
        if (isExistingUser.getPhoneNumber() != null) {
            response.sendRedirect(redirectUrl);
        } else {
            System.out.println("1234");
            HttpSession session = request.getSession();
            session.setAttribute("customUserDetails", customUserDetails);
            response.sendRedirect(redirectUrl + "/regist");
        }
    }

    private Cookie createCookie(String key, String value) {

        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(60*60*60);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setHttpOnly(true);

        return cookie;
    }
}