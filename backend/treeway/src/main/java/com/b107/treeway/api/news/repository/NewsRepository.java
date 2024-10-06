package com.b107.treeway.api.news.repository;

import com.b107.treeway.api.news.dto.NewsResponse;
import com.b107.treeway.api.news.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NewsRepository extends JpaRepository<News, Long> {
    @Query("SELECT new com.b107.treeway.api.news.dto.NewsResponse(n.id, r.id, r.regionName, n.title, n.content, n.createdAt, n.url, n.viewCount) " +
            "FROM News n JOIN n.region r")
    List<NewsResponse> findAllNewsWithRegion();

    @Query("SELECT new com.b107.treeway.api.news.dto.NewsResponse(n.id, r.id, r.regionName, n.title, n.content, n.createdAt, n.url, n.viewCount) " +
            "FROM News n " +
            "JOIN NewsScrap ns ON ns.news.id = n.id " +
            "JOIN Region r ON n.region.id = r.id " +
            "WHERE ns.member.id = :memberId")
    List<NewsResponse> findScrappedNewsByMember(@Param("memberId") Long memberId);

}
