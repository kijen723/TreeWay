package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "floating_population")
public class FloatingPopulation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "floating_population_id", nullable = false)
    private Long id;

    @Column(name = "crtr_ymd", columnDefinition = "TEXT")
    private String crtrYmd;

    @Column(name = "crtr_week")
    private Integer crtrWeek;

    @Column(name = "dwk_nm", length = 255)
    private String dwkNm;

    @Column(name = "ssg_cd", length = 255)
    private String ssgCd;

    @Column(name = "ctpv_nm", length = 255)
    private String ctpvNm;

    @Column(name = "sgg_cd", length = 255)
    private String sggCd;

    @Column(name = "sgg_nm", length = 255)
    private String sggNm;

    @Column(name = "tmzn_cd", length = 255)
    private String tmznCd;

    @Column(name = "sex_dv", length = 255)
    private String sexDv;

    @Column(name = "revisn_amblt_pul_cnt")
    private Long revisnAmbltPulCnt;

    @Column(name = "revisn_nmblt_pul_cnt")
    private Long revisnNmbltPulCnt;
}
