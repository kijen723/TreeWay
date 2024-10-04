package com.b107.treeway.api.analysis.entity;

import com.b107.treeway.api.rating.entity.Region;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "population_analysis")
public class PopulationAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "population_analysis_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "region_id", nullable = false)
    private Region region;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "trend_index", nullable = false)
    private Integer trend_index;

    @Column(name = "activity_status", nullable = false)
    private String activity_status;

    @Column(name = "analysis_data", nullable = false)
    private String analysis_data;

}
