package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "citysi")
public class CitySi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "citysi_id", nullable = false)
    private Long id;

    @Column(name = "citysi_name", length = 255)
    private String citysiName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sigungu_id")
    private Sigungu sigungu;
}
