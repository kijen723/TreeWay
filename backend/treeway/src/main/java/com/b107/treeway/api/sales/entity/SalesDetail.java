package com.b107.treeway.api.sales.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sales_detail")
public class SalesDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sales_detail_id", nullable = false)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Sales sales;

    @Column(name = "field", nullable = true)
    private String location; // 소재지

    @Column(name = "field2", nullable = true)
    private String propertyFeatures; // 매물특징

    @Column(name = "field3", nullable = true)
    private String contractArea; // 계약면적

    @Column(name = "field7", nullable = true)
    private String exclusiveArea; // 전용면적

    @Column(name = "field4", nullable = true)
    private String currentFloor; // 해당층

    @Column(name = "field5", nullable = true)
    private String totalFloors; // 총층

    @Column(name = "field6", nullable = true)
    private String availableDate; // 입주가능일

    @Column(name = "field8", nullable = true)
    private String loanAmount; // 융자금

    @Column(name = "field9", nullable = true)
    private String keyMoney; // 권리금

    @Column(name = "field10", nullable = true)
    private String monthlyMaintenanceFee; // 월관리비

    @Column(name = "field11", nullable = true)
    private String direction; // 방향

    @Column(name = "field12", nullable = true)
    private String currentBusinessType; // 현재업종

    @Column(name = "field13", nullable = true)
    private String recommendedBusinessType; // 추천업종

    @Column(name = "field14", nullable = true)
    private String parkingAvailability; // 주차가능여부

    @Column(name = "field15", nullable = true)
    private String totalParkingSpaces; // 총주차대수

    @Column(name = "field16", nullable = true)
    private String heatingMethod; // 난방(방식/연료)

    @Column(name = "field17", nullable = true)
    private String purpose; // 용도

    @Column(name = "field20", nullable = true)
    private String area; // 지역

    @Column(name = "field18", nullable = true)
    private String buildingUsage; // 건축물 용도

    @Column(name = "field19", nullable = true)
    private String mainStructure; // 주구조

    @Column(name = "field21", nullable = true)
    private String approvalDate; // 사용승인일

    @Column(name = "field22", nullable = true)
    private String propertyNumber; // 매물번호

    @Column(name = "field23", nullable = true)
    private String propertyDescription; // 매물 설명

}
