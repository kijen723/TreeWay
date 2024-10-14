package com.b107.treeway.api.analysis.entity;

import com.b107.treeway.api.rating.entity.Region;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "region_analysis")
public class RegionAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "region_analysis_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id", nullable = false)
    private Region region;

    @Column(name = "facility", nullable = false)
    private String activity_status;

    @Column(name = "analysis_data", nullable = false)
    private String analysis_data;

}
