package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "sigungu")
public class Sigungu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sigungu_id", nullable = false)
    private Long id;

    @Column(name = "sigungu_name", length = 255)
    private String sigunguName;

    @OneToMany(mappedBy = "sigungu")
    private List<CitySi> citySi;
}
