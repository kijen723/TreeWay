package com.b107.treeway.api.member.controller;

import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import com.b107.treeway.api.member.request.AnalyzeRequest;
import com.b107.treeway.api.member.response.AnalyzeResponse;
import com.b107.treeway.api.member.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResponseExtractor;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

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

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),})
    @Operation(summary = "회원 삭제 ")
    @DeleteMapping("{memberId}")
    public ResponseEntity<String> memberDelete(@PathVariable Long memberId){
        Member member = memberService.findMember(memberId);

        if(member != null){
            memberService.deleteMember(member.getId());
            return ResponseEntity.ok("회원 삭제 완료");
        }else{
            return ResponseEntity.status(400).body("잘못된 접근입니다");
        }
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

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),})
    @Operation(summary = "분석 이력 전체 조회")
    @GetMapping("analyze/{memberId}")
    public ResponseEntity<List<AnalyzeResponse>> getMemberAnalyze(@PathVariable Long memberId){
        List<AnalyzeResponse> memberAnalyze = memberService.getMemberAnalyze(memberId);
        return ResponseEntity.ok().body(memberAnalyze);
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),})
    @Operation(summary = "분석 이력 상세 조회")
    @PostMapping("analyze")
    public ResponseEntity<AnalyzeResponse> getMemberAnalyzeDetail(@RequestBody AnalyzeRequest analyzeRequest){
        AnalyzeResponse memberAnalyze = memberService.getMemberAnalyzeDetail(analyzeRequest);
        return ResponseEntity.ok().body(memberAnalyze);
    }

    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Success"),
            @ApiResponse(responseCode = "400", description = "Bad Request"),})
    @Operation(summary = "분석 이력 삭제")
    @DeleteMapping("analyze")
    public ResponseEntity<?> memberAnalyzeDelete(@RequestBody AnalyzeRequest analyzeRequest){
        boolean flag = memberService.deleteAnalyze(analyzeRequest);
        if(flag){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.status(400).build();
        }
    }
}
