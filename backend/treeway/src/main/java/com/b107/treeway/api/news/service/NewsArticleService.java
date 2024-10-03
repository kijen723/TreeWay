package com.b107.treeway.api.news.service;

import com.b107.treeway.api.news.entity.NewsArticle;
import com.b107.treeway.api.news.repository.NewsArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsArticleService {
    @Autowired
    private NewsArticleRepository newsArticleRepository;

    public List<NewsArticle> getAllNewsArticles() {
        return newsArticleRepository.findAll();
    }
}
