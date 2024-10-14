package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TrendAnalysisResponse {
    private List<TrendAnalysisDTO> trendAnalysis;
    private List<KeywordAnalysisDTO> keywordAnalysis;
    private List<NewsAnalysisDTO> newsAnalysis;

    public TrendAnalysisResponse(List<TrendAnalysisDTO> trendAnalysis, List<KeywordAnalysisDTO> keywordAnalysis, List<NewsAnalysisDTO> newsAnalysis) {
        this.trendAnalysis = trendAnalysis;
        this.keywordAnalysis = keywordAnalysis;
        this.newsAnalysis = newsAnalysis;
    }
}
