package com.b107.treeway.api.article.entity;

import com.b107.treeway.api.recommend.entity.MinorBusiness;
import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.recommend.entity.Sigungu;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sigungu_id")
    private Sigungu sigungu;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minor_business_id")
    private MinorBusiness minorBusiness;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", referencedColumnName = "member_id")
    private Member member;

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
