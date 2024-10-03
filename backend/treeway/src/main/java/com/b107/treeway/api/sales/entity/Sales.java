package com.b107.treeway.api.sales.entity;

import com.b107.treeway.api.rating.entity.IndustryDetail;
import com.b107.treeway.api.rating.entity.Region;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sales")
public class Sales {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sales_id", nullable = false)
    private Long salesId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "industry_detail_id")
    private IndustryDetail industryDetail;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "region_id")
    private Region region;

    @Column(name = "field", nullable = true)
    private String field; // 권리금

    @Column(name = "field2", nullable = true)
    private String field2; // 보증금

    @Column(name = "field3", nullable = true)
    private String field3; // 월세

    @Column(name = "field4", nullable = true)
    private String field4; // 가게 정보

    @Column(name = "field5", nullable = true)
    private String field5; // 평수

}