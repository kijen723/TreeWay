package com.b107.treeway.api.article.repository;


import com.b107.treeway.api.article.dto.ArticleCommentResponse;
import com.b107.treeway.api.article.entity.ArticleComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArticleCommentRepository extends JpaRepository<ArticleComment, Long> {
    @Query("SELECT new com.b107.treeway.api.article.dto.ArticleCommentResponse(c.id, m.id, m.memberName, a.id, c.content, c.createdAt) " +
            "FROM ArticleComment c JOIN c.member m JOIN c.article a WHERE a.id = :articleId")
    List<ArticleCommentResponse> findCommentsByArticleId(@Param("articleId") Long articleId);

}
