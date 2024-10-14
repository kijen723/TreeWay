package com.b107.treeway.api.rating.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "industry_id", nullable = false)
    @JsonIgnore
    private Industry industry;

    @Column(name = "industry_detail_name", nullable = false)
    private String industryDetailName;

}
