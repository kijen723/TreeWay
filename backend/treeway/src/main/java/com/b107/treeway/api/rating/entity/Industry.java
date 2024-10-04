package com.b107.treeway.api.rating.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "industry")
public class Industry {

    @Id
    @Column(name = "industry_id", nullable = false)
    private Long id;

    @Column(name = "industry_name", nullable = false, unique = true)
    private String industryName;

}
