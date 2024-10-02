package com.b107.treeway.api.recommend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "industry_detail")
public class IndustryDetail {

    @Id
    @Column(name = "industry_detail_id", nullable = false)
    private Long industryDetailCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "industr_id")
    private Industry industry;

    @Column(name = "industry_detail_name")
    private String industryName;

    @Column(name = "industry_detail_time")
    private int industryDetailTime;
}
