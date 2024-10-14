package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AnalysisResponse {
    private List<IndustryAnalysisResponse> industryAnalysis;
    private List<PopulationAnalysisResponse> populationAnalysis;
    private List<RegionAnalysisResponse> regionAnalysis;

    public AnalysisResponse(List<IndustryAnalysisResponse> industryAnalysis,
                            List<PopulationAnalysisResponse> populationAnalysis,
                            List<RegionAnalysisResponse> regionAnalysis) {
        this.industryAnalysis = industryAnalysis;
        this.populationAnalysis = populationAnalysis;
        this.regionAnalysis = regionAnalysis;
    }
}
