package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegionAnalysisResponse {
    private Long id;
    private Long regionId;
    private String regionName;
    private String facility;
    private String analysisData;

    public RegionAnalysisResponse(Long id, Long regionId, String regionName, String facility, String analysisData) {
        this.id = id;
        this.regionId = regionId;
        this.regionName = regionName;
        this.facility = facility;
        this.analysisData = analysisData;
    }
}
