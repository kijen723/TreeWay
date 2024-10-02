package com.b107.treeway.api.sales.entity;

import com.b107.treeway.api.recommend.entity.MinorBusiness;
import com.b107.treeway.api.recommend.entity.Sigungu;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minor_business_id")
    private MinorBusiness minorBusiness;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sigungu_id")
    private Sigungu sigungu;

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
