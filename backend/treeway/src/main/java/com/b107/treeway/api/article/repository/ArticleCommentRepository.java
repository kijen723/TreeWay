package com.b107.treeway.api.article.repository;


import com.b107.treeway.api.article.entity.ArticleComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleCommentRepository extends JpaRepository<ArticleComment, Long> {
}
