package com.b107.treeway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//@SpringBootApplication
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)	//임시로 스프링 시큐리티 비활성화
public class TreewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(TreewayApplication.class, args);
    }

}
