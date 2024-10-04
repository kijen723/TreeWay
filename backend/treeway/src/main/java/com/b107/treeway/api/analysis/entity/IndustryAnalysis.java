package com.b107.treeway.api.analysis.entity;

import com.b107.treeway.api.rating.entity.IndustryDetail;
import com.b107.treeway.api.rating.entity.Region;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "industry_analysis")
public class IndustryAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "industry_analysis_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "industry_detail_id", nullable = false)
    private IndustryDetail industryDetail;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "region_id", nullable = false)
    private Region region;

    @Column(name = "data_type", nullable = false)
    private String dataType;

    @Column(name = "analysis_data", nullable = false)
    private String analysisData;

}
