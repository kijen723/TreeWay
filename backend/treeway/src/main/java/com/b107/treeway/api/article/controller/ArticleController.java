package com.b107.treeway.api.article.controller;

import com.b107.treeway.api.article.dto.ArticleDto;
import com.b107.treeway.api.article.dto.ArticleResponse;
import com.b107.treeway.api.article.dto.ArticleScrapRequest;
import com.b107.treeway.api.article.dto.ArticleScrapResponse;
import com.b107.treeway.api.article.entity.Article;
import com.b107.treeway.api.article.entity.ArticleScrap;
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

    @PostMapping
    public ResponseEntity<Article> registArticle(@RequestBody ArticleDto articleDto) {
        Article article = articleService.registArticle(articleDto);
        return ResponseEntity.ok(article);
    }

    @GetMapping
    public ResponseEntity<List<ArticleResponse>> getAllArticles() {
        List<ArticleResponse> articles = articleService.getAllArticles();
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArticleResponse> getArticleById(@PathVariable Long id) {
        ArticleResponse article = articleService.getArticleById(id);
        return ResponseEntity.ok(article);
    }

    @PostMapping("/scrap")
    public ResponseEntity<String> scrapArticle(@RequestBody ArticleScrapRequest request) {
        String result = articleService.scrapArticle(request.getArticleId(), request.getMemberId());
        return ResponseEntity.ok(result);
    }

    @PostMapping("/scrap/check")
    public ResponseEntity<ArticleScrapResponse> checkScrapStatus(@RequestBody ArticleScrapRequest scrapRequest) {
        boolean isScraped = articleService.checkIfScraped(scrapRequest.getMemberId(), scrapRequest.getArticleId());
        return ResponseEntity.ok(new ArticleScrapResponse(isScraped));
    }

    @DeleteMapping("/scrap")
    public ResponseEntity<String> deleteScrap(@RequestBody ArticleScrapRequest request) {
        articleService.deleteScrap(request.getArticleId(), request.getMemberId());
        return ResponseEntity.ok("스크랩이 삭제되었습니다.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
        return ResponseEntity.ok("Article deleted successfully");
    }

}
