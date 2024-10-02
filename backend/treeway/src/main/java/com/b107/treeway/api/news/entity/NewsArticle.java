package com.b107.treeway.api.news.entity;

import com.b107.treeway.api.recommend.entity.MinorBusiness;
import com.b107.treeway.api.recommend.entity.Sigungu;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "news_article")
public class NewsArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_article_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "major_business_id")
    private MinorBusiness minorBusinessId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sigungu_id")
    private Sigungu sigungu;

    @Column(name = "title", length = 255)
    private String title;

    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    @Column(name = "link_url", length = 3000)
    private String linkUrl;

    @Column(name = "img_url", length = 3000)
    private String imgUrl;

    @Column(name = "view_count")
    private Integer viewCount;

    @Column(name = "create_at")
    private LocalDateTime createAt;
}
