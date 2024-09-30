package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id", nullable = false)
    private Long id;

    @Column(name = "minor_business_id", nullable = false)
    private Long minorBusinessId;

    @Column(name = "sigungu_id", nullable = false)
    private Long sigunguId;

    @Column(name = "member_id", nullable = false)
    private Long memberId = 1L; // 기본값 1로 설정

    @Column(name = "title", length = 255)
    private String title;

    @Column(name = "content", length = 3000)
    private String content;

    @Column(name = "create_at")
    private LocalDateTime createAt;

    @Column(name = "modified_at")
    private LocalDateTime modifiedAt;

    @Column(name = "view_count")
    private Integer viewCount;
}
