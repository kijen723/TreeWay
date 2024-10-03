package com.b107.treeway.api.rating.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "region")
public class Region {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "region_id", nullable = false)
    private Long id;

    @Column(name = "region_name", nullable = false, unique = true, length = 255)
    private String regionName;

    @Column(name = "region_detail_name", nullable = false, unique = true, length = 255)
    private String regionDetailName;

}
