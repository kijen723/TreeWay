package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "analysis_resume")
public class AnalysisResume {

    @Id
    @Column(name = "analysis_resume_id", nullable = false)
    private Long analysisResumeId; // 분석 이력 ID

    @Column(name = "member_id", nullable = false)
    private Long memberId; // 맴버 ID
}
