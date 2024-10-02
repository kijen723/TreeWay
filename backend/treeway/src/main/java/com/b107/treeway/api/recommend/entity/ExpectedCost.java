package com.b107.treeway.api.recommend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "expected_cost")
public class ExpectedCost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "expected_cost_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "industry_detail_id")
    private IndustryDetail industryDetail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id")
    private Region region;

    private int cost;

}
