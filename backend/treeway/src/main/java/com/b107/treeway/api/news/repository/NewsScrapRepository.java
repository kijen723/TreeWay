package com.b107.treeway.api.news.repository;

import com.b107.treeway.api.news.entity.NewsScrap;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NewsScrapRepository extends JpaRepository<NewsScrap, Long> {
    boolean existsByMemberIdAndNewsId(Long memberId, Long newsId);
    Optional<NewsScrap> findByMemberIdAndNewsId(Long memberId, Long newsId);
}
