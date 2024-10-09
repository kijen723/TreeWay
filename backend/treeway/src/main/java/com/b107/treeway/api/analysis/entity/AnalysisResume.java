package com.b107.treeway.api.analysis.entity;

import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.rating.entity.IndustryDetail;
import com.b107.treeway.api.rating.response.RatingResponse;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@Entity
@Table(name = "analysis_resume")
@NoArgsConstructor
public class AnalysisResume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "analysis_resume_id", nullable = false)
    private Long id;

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "analysis_date")
    private Timestamp analysisDate;

    @Column(name = "industry_detail")
    private String industryDetail;

    @Column(name = "industry_detail_id")
    private Long industryDetailId;

    @Column(name = "region")
    private String region;

    @Column(name = "region_id")
    private Long regionId;

    private int cost;

    public AnalysisResume(Long memberId, Timestamp analysisDate, String industryDetail, Long industryDetailId, String region, Long regionId, int cost) {
        this.memberId = memberId;
        this.analysisDate = analysisDate;
        this.industryDetail = industryDetail;
        this.industryDetailId = industryDetailId;
        this.region = region;
        this.regionId = regionId;
        this.cost = cost;
    }
}
