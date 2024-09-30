package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "news_article_scrap")
public class NewsArticleScrap {

    @Id
    @Column(name = "member_id", nullable = false)
    private Long memberId; // 맴버 ID

    @Id
    @Column(name = "news_article_id", nullable = false)
    private Long newsArticleId; // 뉴스 ID
}
