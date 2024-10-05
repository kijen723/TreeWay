package com.b107.treeway.api.policy.entity;

import com.b107.treeway.api.rating.entity.Region;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

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
    @JoinColumn(name = "region_id", nullable = false)
    private Region region;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "host", nullable = false)
    private String host;

    @Column(name = "eligibility", nullable = false)
    private String eligibility;

    @Column(name = "target", nullable = false)
    private String target;

    @Column(name = "url", nullable = false)
    private String url;

    @Column(name = "start_date", nullable = false)
    private LocalDateTime start_date;

    @Column(name = "end_date", nullable = false)
    private LocalDateTime end_date;

    @ColumnDefault("0")
    @Column(name = "view_count", nullable = false)
    private Integer viewCount;

}
