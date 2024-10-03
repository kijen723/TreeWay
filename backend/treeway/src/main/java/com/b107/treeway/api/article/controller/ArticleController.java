package com.b107.treeway.api.article.controller;

import com.b107.treeway.api.article.entity.Article;
import com.b107.treeway.api.article.service.ArticleService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/article")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Success"),
//            @ApiResponse(responseCode = "404", description = "Not Found"),})
//    @Operation(summary = "게시글 컨트롤러")
    @GetMapping
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/{id}")
    public Article getArticleById(@PathVariable Long id) {
        return articleService.getArticleById(id);
    }

//    @PostMapping("{typeItemId}")
//    public ResponseEntity<?> article2() {
//        return ResponseEntity.ok().build();
//    }
//
//    @PostMapping("scrap")
//    public ResponseEntity<?> article3(){
//        return ResponseEntity.ok().build();
//    }
//
//    @DeleteMapping("scrap")
//    public ResponseEntity<?> article4(){
//        return ResponseEntity.ok().build();
//    }
//
//    @PutMapping()
//    public ResponseEntity<?> article5(){
//        return ResponseEntity.ok().build();
//    }
//
//    @PostMapping()
//    public ResponseEntity<?> article6(){
//        return ResponseEntity.ok().build();
//    }
//
//    @DeleteMapping()
//    public ResponseEntity<?> article7(){
//        return ResponseEntity.ok().build();
//    }

///api/article
///api/article/{type-item-id}
///api/article/scrap
///api/article/scrap
///api/article
///api/article
///api/article-comment
///api/article-comment

//GET
//GET
//POST
//DELETE
//DELETE
//PUT
//POST
//DELETE
}
