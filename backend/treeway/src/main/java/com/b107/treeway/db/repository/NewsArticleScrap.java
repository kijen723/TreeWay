package com.b107.treeway.db.repository;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

public interface NewsArticleScrap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_article_scrap_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "new_article_id")
    private NewsArticle newsArticle;
}
