package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PopulationAnalysisResponse {
    private Long id;
    private Long regionId;
    private String regionName;
    private String gender;
    private Integer trendIndex;
    private String activityStatus;
    private String analysisData;

    public PopulationAnalysisResponse(Long id, Long regionId, String regionName, String gender, Integer trendIndex, String activityStatus, String analysisData) {
        this.id = id;
        this.regionId = regionId;
        this.regionName = regionName;
        this.gender = gender;
        this.trendIndex = trendIndex;
        this.activityStatus = activityStatus;
        this.analysisData = analysisData;
    }
}
