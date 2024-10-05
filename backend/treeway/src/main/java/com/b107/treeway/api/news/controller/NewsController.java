package com.b107.treeway.api.news.controller;

import com.b107.treeway.api.news.dto.NewsResponse;
import com.b107.treeway.api.news.dto.NewsScrapRequest;
import com.b107.treeway.api.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping
    public ResponseEntity<List<NewsResponse>> getAllNews() {
        List<NewsResponse> newsList = newsService.getAllNews();
        return ResponseEntity.ok(newsList);
    }

    @PostMapping("/scrap")
    public ResponseEntity<String> scrapNews(@RequestBody NewsScrapRequest request) {
        String result = newsService.scrapNews(request);
        return ResponseEntity.ok(result);
    }

}
