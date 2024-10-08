package com.b107.treeway.api.analysis.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "keyword_analysis")
public class KeywordAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "keyword_analysis_id", nullable = false)
    private Long id;

    @Column(name = "keyword")
    private String keyword;

    @Column(name = "count")
    private Integer count;

    @Column(name = "sig_cd")
    private Integer sigCd;

}
