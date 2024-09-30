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

    // 필요한 경우 추가적인 메서드나 로직을 여기에 구현할 수 있습니다.
}
