package com.b107.treeway.api.article.repository;


import com.b107.treeway.api.article.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}