package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sales")
public class Sales {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sales_id", nullable = false)
    private Long salesId;

    @Column(name = "minor_business_id", nullable = false)
    private Long minorBusinessId;

    @Column(name = "sigungu_id", nullable = false)
    private Long sigunguId;

    @Column(name = "field", nullable = true)
    private String field; // 권리금

    @Column(name = "field2", nullable = true)
    private String field2; // 보증금

    @Column(name = "field3", nullable = true)
    private String field3; // 월세

    @Column(name = "field4", nullable = true)
    private String field4; // 가게 정보

    @Column(name = "field5", nullable = true)
    private String field5; // 평수

    // 필요한 경우 추가적인 메서드나 로직을 여기에 구현할 수 있습니다.
}
