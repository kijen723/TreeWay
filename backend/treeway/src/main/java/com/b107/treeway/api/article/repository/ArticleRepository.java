package com.b107.treeway.api.article.repository;


import com.b107.treeway.api.article.dto.ArticleResponse;
import com.b107.treeway.api.article.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query("SELECT new com.b107.treeway.api.article.dto.ArticleResponse(a.id, m.id, m.memberName, id.id, id.industryDetailName, r.id, r.regionName, a.title, a.content, a.createdAt, a.modifiedAt, a.viewCount) " +
            "FROM Article a " +
            "JOIN a.member m " +
            "JOIN a.industryDetail id " +
            "JOIN a.region r " +
            "WHERE a.id = :id")
    Optional<ArticleResponse> findArticleByIdWithDetails(@Param("id") Long id);

    @Query("SELECT new com.b107.treeway.api.article.dto.ArticleResponse(a.id, m.id, m.memberName, id.id, id.industryDetailName, r.id, r.regionName, a.title, a.content, a.createdAt, a.modifiedAt, a.viewCount) " +
            "FROM Article a " +
            "JOIN a.member m " +
            "JOIN a.industryDetail id " +
            "JOIN a.region r")
    List<ArticleResponse> findAllArticlesWithDetails();

    @Query("SELECT new com.b107.treeway.api.article.dto.ArticleResponse(a.id, a.member.id, m.memberName, a.industryDetail.id, id.industryDetailName, a.region.id, r.regionName, a.title, a.content, a.createdAt, a.modifiedAt, a.viewCount) " +
            "FROM Article a " +
            "JOIN a.member m " +
            "JOIN a.industryDetail id " +
            "JOIN a.region r " +
            "WHERE (:regionId IS NULL OR a.region.id = :regionId) " +
            "AND (:industryDetailId IS NULL OR a.industryDetail.id = :industryDetailId) " +
            "AND (:memberId IS NULL OR a.member.id = :memberId) " +
            "AND (:title IS NULL OR a.title LIKE %:title%)")
    List<ArticleResponse> searchArticles(@Param("regionId") Long regionId, @Param("industryDetailId") Long industryDetailId, @Param("memberId") Long memberId, @Param("title") String title);

}
