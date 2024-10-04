package com.b107.treeway.api.rating.entity;

import com.b107.treeway.api.sales.entity.SalesItem;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "expected_cost")
public class ExpectedCost {

    @Id
    @Column(name = "expected_cost_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "industry_detail_id")
    private IndustryDetail industryDetail;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "region_id")
    private Region region;

    private int cost;

    @Column(name = "region_detail")
    private String regionDetail;

}

