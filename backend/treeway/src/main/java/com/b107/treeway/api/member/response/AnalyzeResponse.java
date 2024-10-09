package com.b107.treeway.api.member.response;

import com.b107.treeway.api.analysis.entity.AnalysisResume;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnalyzeResponse {

    private Long Id;
    private Long memberId;
    private Timestamp analysisDate;
    private String industryDetail;
    private Long industryDetailId;
    private String region;
    private Long regionId;
    private int cost;

    public static AnalyzeResponse convertToAnalyzeResponse(AnalysisResume analysisResume) {
        return new AnalyzeResponse(
                analysisResume.getId(),
                analysisResume.getMemberId(),
                analysisResume.getAnalysisDate(),
                analysisResume.getIndustryDetail(),
                analysisResume.getIndustryDetailId(),
                analysisResume.getRegion(),
                analysisResume.getRegionId(),
                analysisResume.getCost()
        );
    }
}
