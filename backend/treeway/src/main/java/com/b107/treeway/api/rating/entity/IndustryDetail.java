package com.b107.treeway.api.rating.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "industry_detail")
public class IndustryDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "industry_detail_id", nullable = false)
    private Long industryDetailId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "industry_id")
    private Industry industry;

    @Column(name = "industry_detail_name", nullable = false, length = 255)
    private String industryDetailName;

}
