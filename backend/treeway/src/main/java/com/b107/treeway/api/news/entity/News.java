package com.b107.treeway.api.news.entity;

import com.b107.treeway.api.rating.entity.Region;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id", nullable = false)
    private Region region;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false, length = 500)
    private String content;

    @Column(name = "url", nullable = false, length = 3000)
    private String url;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @ColumnDefault("0")
    @Column(name = "view_count", nullable = false)
    private Integer viewCount;

}
