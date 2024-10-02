package com.b107.treeway.api.policy.entity;

import com.b107.treeway.api.recommend.entity.MinorBusiness;
import com.b107.treeway.api.recommend.entity.Sigungu;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "policy")
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "policy_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minor_business_id")
    private MinorBusiness minorBusiness;

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

    @Enumerated(EnumType.STRING)
    @Column(name = "policy_status")
    private PolicyStatus policyStatus;

    @Column(name = "view_count")
    private Integer viewCount;

    @Column(name = "create_at")
    private LocalDateTime createAt;

    public enum PolicyStatus {
        진행예정,
        진행중,
        진행종료
    }
}
