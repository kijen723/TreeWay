package com.b107.treeway.api.article.repository;


import com.b107.treeway.api.article.entity.ArticleScrap;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArticleScrapRepository extends JpaRepository<ArticleScrap, Long> {
    boolean existsByArticleIdAndMemberId(Long articleId, Long memberId);

    Optional<ArticleScrap> findByArticleIdAndMemberId(Long articleId, Long memberId);
}
