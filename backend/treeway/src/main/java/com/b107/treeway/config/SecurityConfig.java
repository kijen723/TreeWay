package com.b107.treeway.config;

import com.b107.treeway.jwt.JWTFilter;
import com.b107.treeway.jwt.JWTUtil;
import com.b107.treeway.oauth2.hadler.CustomSuccessHandler;
import com.b107.treeway.oauth2.service.CustomOAuth2UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;
    private final CustomSuccessHandler customSuccessHandler;
    private final JWTUtil jwtUtil;

    public SecurityConfig(CustomOAuth2UserService customOAuth2UserService, CustomSuccessHandler customSuccessHandler, JWTUtil jwtUtil) {
        this.customOAuth2UserService = customOAuth2UserService;
        this.customSuccessHandler = customSuccessHandler;
        this.jwtUtil = jwtUtil;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(corsCustomizer -> corsCustomizer.configurationSource(request -> {
                    CorsConfiguration configuration = new CorsConfiguration();

                    // 허용할 Origin 설정
                    configuration.setAllowedOrigins(Arrays.asList(
                            "http://localhost:3000",
                            "http://localhost:3001",
                            "https://j11b107.p.ssafy.io"
                    ));

                    // 허용할 HTTP 메소드 설정
                    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));

                    // 헤더와 인증 정보 허용
                    configuration.setAllowedHeaders(Arrays.asList("*"));
                    configuration.setAllowCredentials(true);

                    // preflight 요청 캐시 시간 설정
                    configuration.setMaxAge(3600L);

                    // 노출할 헤더 설정
                    configuration.setExposedHeaders(Arrays.asList("Set-Cookie", "Authorization"));

                    return configuration;
                }));

        // CSRF 비활성화
        http.csrf(AbstractHttpConfigurer::disable);

        // From 로그인 방식 비활성화
        http.formLogin(AbstractHttpConfigurer::disable);

        // HTTP Basic 인증 방식 비활성화
        http.httpBasic(AbstractHttpConfigurer::disable);

        // JWT 필터 추가
        http.addFilterBefore(new JWTFilter(jwtUtil), UsernamePasswordAuthenticationFilter.class);

        // OAuth2 로그인 설정
        http.oauth2Login(oauth2 -> oauth2
                .userInfoEndpoint(userInfoEndpointConfig -> userInfoEndpointConfig.userService(customOAuth2UserService))
                .successHandler(customSuccessHandler)
        );

        // 모든 요청을 허용
        http.authorizeHttpRequests(auth -> auth.anyRequest().permitAll());

        // 세션 설정: STATELESS
        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }
}
