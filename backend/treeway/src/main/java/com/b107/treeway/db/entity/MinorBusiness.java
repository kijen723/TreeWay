package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "major_business")
public class MinorBusiness {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mijor_business_id", nullable = false)
    private Long minorBusinessId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "major_business_id")
    private MajorBusiness majorBusiness;

    @Column(name = "minor_business_name", length = 255)
    private String minorBusinessName;

}
