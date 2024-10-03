package com.b107.treeway.api.news.repository;

import com.b107.treeway.api.news.entity.NewsArticle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsArticleRepository extends JpaRepository<NewsArticle, Long> {

}
