package com.b107.treeway.api.article.repository;


import com.b107.treeway.api.article.entity.ArticleAttachedFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleAttachedFileRepository extends JpaRepository<ArticleAttachedFile, Long> {

}
