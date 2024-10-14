package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IndustryAnalysisResponse {
    private Long id;
    private Long industryDetailId;
    private String industryDetailName;
    private Long regionId;
    private String regionName;
    private String dataType;
    private String analysisData;

    public IndustryAnalysisResponse(Long id, Long industryDetailId, String industryDetailName, Long regionId, String regionName, String dataType, String analysisData) {
        this.id = id;
        this.industryDetailId = industryDetailId;
        this.industryDetailName = industryDetailName;
        this.regionId = regionId;
        this.regionName = regionName;
        this.dataType = dataType;
        this.analysisData = analysisData;
    }
}
