package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sales_scrap")
public class SalesScrap {

    @Id
    @Column(name = "member_id", nullable = false)
    private Long memberId; // 맴버 ID

    @Id
    @Column(name = "sales_id", nullable = false)
    private Long salesId; // 매물 ID
}
