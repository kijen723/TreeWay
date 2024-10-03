package com.b107.treeway.api.news.controller;

import com.b107.treeway.api.news.entity.NewsArticle;
import com.b107.treeway.api.news.service.NewsArticleService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/news")
public class NewsController {
    @Autowired
    private NewsArticleService newsArticleService;

    @GetMapping
    public List<NewsArticle> getAllNews() {
        return newsArticleService.getAllNewsArticles();
    }

//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Success"),
//            @ApiResponse(responseCode = "404", description = "Not Found"),})
//    @Operation(summary = "뉴스 컨트롤러")
//    @GetMapping
//    public ResponseEntity<?> News() {
//        return ResponseEntity.ok().build();
//    }
//
//    @GetMapping("{memberId}")
//    public ResponseEntity<?> News2() {
//        return ResponseEntity.ok().build();
//    }
//
//    @PostMapping
//    public ResponseEntity<?> News3() {
//        return ResponseEntity.ok().build();
//    }
//
//    @DeleteMapping
//    public ResponseEntity<?> News4() {
//        return ResponseEntity.ok().build();
//    }
}
