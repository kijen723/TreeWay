package com.b107.treeway.api.rating.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "business_hour")
public class BusinessHour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "business_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "industry_detail_id")
    private IndustryDetail industryDetailId;

    @Column(name = "business_time", length = 255)
    private int businessTime;

}
