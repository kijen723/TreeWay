package com.b107.treeway.api.rating.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "industry_detail")
public class IndustryDetail {

    @Id
    @Column(name = "industry_detail_id", nullable = false)
    private Long industryDetailId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "industry_id", nullable = false)
    private Industry industry;

    @Column(name = "industry_detail_name", nullable = false)
    private String industryDetailName;

}
