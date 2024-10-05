package com.b107.treeway.api.member.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResponseExtractor;

@RestController
@RequestMapping("api/member")
public class MemberController {

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),})
    @PostMapping("logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response){
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("Authorization".equals(cookie.getName())) {
                    cookie.setValue(null);
                    cookie.setMaxAge(0);
                    cookie.setPath("/");
                    response.addCookie(cookie);
                    return ResponseEntity.ok("로그아웃 되었습니다");
                }
            }
        }
        return ResponseEntity.status(400).body("잘못된 접근입니다");
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success"),
            @ApiResponse(responseCode = "404", description = "Not Found"),})
    @Operation(summary = "맴버관련 컨트롤러")
    @GetMapping
    public ResponseEntity<?> member() {
        return ResponseEntity.ok().build();
    }

    @PatchMapping("{memberId}")
    public ResponseEntity<?> memberUpdate(){
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{memberId}")
    public ResponseEntity<?> memberDelete(){
        return ResponseEntity.ok().build();
    }

    @GetMapping("article/{memberId}")
    public ResponseEntity<?> memberArticle(){
        return ResponseEntity.ok().build();
    }

    @GetMapping("sales/{memberId}")
    public ResponseEntity<?> memberSales(){
        return ResponseEntity.ok().build();
    }

    @GetMapping("policy/{memberId}")
    public ResponseEntity<?> memberPolicy(){
        return ResponseEntity.ok().build();
    }

    @GetMapping("news/{memberId}")
    public ResponseEntity<?> memberNews(){
        return ResponseEntity.ok().build();
    }

    @GetMapping("analyze/{memberId}")
    public ResponseEntity<?> memberAnalyze(){
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("analyze/{memberId}")
    public ResponseEntity<?> memberAnalyzeDelete(){
        return ResponseEntity.ok().build();
    }
}
