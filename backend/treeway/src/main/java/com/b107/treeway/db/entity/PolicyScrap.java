package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "policy_scrap")
public class PolicyScrap {

    @Id
    @Column(name = "member_id", nullable = false)
    private Long memberId; // 맴버 ID

    @Id
    @Column(name = "policy_id", nullable = false)
    private Long policyId; // 정책 ID
}
