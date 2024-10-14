package com.b107.treeway.api.analysis.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "trend_analysis")
public class TrendAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trend_analysis_id", nullable = false)
    private Long id;

    @Column(name = "trend_type")
    private String trendType;

    @Column(name = "trend_count")
    private String trendCount;

    @Column(name = "sig_cd")
    private Integer sigCd;

}
