package com.b107.treeway.api.article.controller;

import com.b107.treeway.api.article.dto.*;
import com.b107.treeway.api.article.entity.Article;
import com.b107.treeway.api.article.entity.ArticleComment;
import com.b107.treeway.api.article.service.ArticleService;
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
    public ResponseEntity<Article> registArticle(@RequestBody ArticleRequest articleRequest) {
        Article article = articleService.registArticle(articleRequest);
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

    @PutMapping("/{id}")
    public ResponseEntity<Article> updateArticle(
            @PathVariable Long id,
            @RequestBody ArticleRequest articleRequest) {
        Article updatedArticle = articleService.updateArticle(id, articleRequest);
        return ResponseEntity.ok(updatedArticle);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ArticleResponse>> searchArticles(
            @RequestParam(required = false) Long regionId,
            @RequestParam(required = false) Long industryDetailId,
            @RequestParam(required = false) Long memberId,
            @RequestParam(required = false) String title) {
        List<ArticleResponse> articles = articleService.searchArticles(regionId, industryDetailId, memberId, title);
        return ResponseEntity.ok(articles);
    }

    @PostMapping("/comment")
    public ResponseEntity<ArticleComment> registComment(@RequestBody ArticleCommentRequest request) {
        ArticleComment comment = articleService.registComment(request);
        return ResponseEntity.ok(comment);
    }

    @GetMapping("/comment/{id}")
    public ResponseEntity<List<ArticleCommentResponse>> getCommentsByArticleId(@PathVariable Long id) {
        List<ArticleCommentResponse> comments = articleService.getCommentsByArticleId(id);
        return ResponseEntity.ok(comments);
    }

    @DeleteMapping("/comment/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable Long id) {
        articleService.deleteComment(id);
        return ResponseEntity.ok("댓글이 성공적으로 삭제되었습니다.");
    }

    @GetMapping("/scrap/{memberId}")
    public ResponseEntity<List<ArticleResponse>> getScrappedArticlesByMember(
            @PathVariable("memberId") Long memberId) {
        List<ArticleResponse> articles = articleService.getScrappedArticlesByMember(memberId);
        return ResponseEntity.ok(articles);
    }

    @PostMapping("/viewUp/{articleId}")
    public ResponseEntity<String> increaseViewCount(@PathVariable Long articleId) {
        articleService.increaseViewCount(articleId);
        return ResponseEntity.ok("View count increased successfully");
    }

}
