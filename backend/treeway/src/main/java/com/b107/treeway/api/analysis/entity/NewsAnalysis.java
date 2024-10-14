package com.b107.treeway.api.analysis.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "news_analysis")
public class NewsAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_analysis_id", nullable = false)
    private Long id;

    @Column(name = "title", length = 500)
    private String keyword;

    @Column(name = "content", length = 3000)
    private String content;

    @Column(name = "date")
    private LocalDateTime date;

    @Column(name = "url", length = 3000)
    private String url;

    @Column(name = "sig_cd")
    private Integer sigCd;

}
