package com.b107.treeway.api.article.controller;

import com.b107.treeway.api.article.dto.*;
import com.b107.treeway.api.article.entity.Article;
import com.b107.treeway.api.article.entity.ArticleComment;
import com.b107.treeway.api.article.service.ArticleService;
import com.b107.treeway.api.attachedfile.service.AttachedFileService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/article")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private AttachedFileService attachedFileService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Article> registArticle(
            @RequestPart("articleRequest") String articleRequestJson,
            @RequestPart("files") List<MultipartFile> files) throws IOException {

        // JSON 데이터를 객체로 변환
        ObjectMapper objectMapper = new ObjectMapper();
        ArticleRequest articleRequest = objectMapper.readValue(articleRequestJson, ArticleRequest.class);

        // Article 저장 로직
        Article article = articleService.registArticle(articleRequest);

        // 파일 저장 로직
        if (files != null && !files.isEmpty()) {
            for (MultipartFile file : files) {
                attachedFileService.saveFile(file, article.getId());
            }
        }

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

}
