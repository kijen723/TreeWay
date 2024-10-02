package com.b107.treeway.api.recommend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "job_recommend")
public class JobRecommend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int sc;
    private int mdc;
    private double tp;
}
