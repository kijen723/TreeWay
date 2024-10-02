package com.b107.treeway.api.recommend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "minor_business")
public class MinorBusiness {

    @Id
    @Column(name = "mijor_business_id", nullable = false)
    private Long minorBusinessCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "major_business_id")
    private MajorBusiness majorBusiness;

    @Column(name = "major_business_name")
    private String majorBusinessName;

    @Column(name = "minor_business_name")
    private String minorBusinessName;

    @Column(name = "minor_business_detail_code")
    private int minorBusinessDetailCode;

    @Column(name = "minor_business_time")
    private int minorBusinessTime;
}
