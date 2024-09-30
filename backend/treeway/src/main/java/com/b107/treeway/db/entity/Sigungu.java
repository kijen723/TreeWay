package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sigungu")
public class Sigungu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sigungu_id", nullable = false)
    private Long id;

    @Column(name = "citysi_id", nullable = false)
    private Long citysiId;

    @Column(name = "sigungu_name", length = 255)
    private String sigunguName;
}
