package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TrendAnalysisResponse {
    private List<TrendAnalysisDTO> trendAnalysis;
    private List<KeywordAnalysisDTO> keywordAnalysis;

    public TrendAnalysisResponse(List<TrendAnalysisDTO> trendAnalysis, List<KeywordAnalysisDTO> keywordAnalysis) {
        this.trendAnalysis = trendAnalysis;
        this.keywordAnalysis = keywordAnalysis;
    }
}
