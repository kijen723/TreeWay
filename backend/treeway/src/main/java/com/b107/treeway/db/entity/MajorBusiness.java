package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "major_business")
public class MajorBusiness {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "major_business_id", nullable = false)
    private Long majorBusinessId;

    @Column(name = "major_business_name", length = 255)
    private String majorBusinessName;

}
