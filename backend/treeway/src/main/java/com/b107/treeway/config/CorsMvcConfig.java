package com.b107.treeway.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsMvcConfig implements WebMvcConfigurer {

    @Value("${custom.redirect-url}")
    private String redirectUrl;

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {

        corsRegistry.addMapping("/**")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                .exposedHeaders("Set-Cookie")
                .allowedOrigins(redirectUrl);
=======
                .allowedOrigins("http://localhost:3000")
=======
                .allowedOrigins("http://localhost:3001", "https://j11b107.p.ssafy.io")
>>>>>>> 89a094a (fix : 설정 변경)
=======
                .allowedOrigins("http://localhost:3000", "http://localhost:3001", "https://j11b107.p.ssafy.io")
>>>>>>> cde53ae (fix : 경로 추가)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
>>>>>>> a569950 (fix : 설정 변경)
    }
}