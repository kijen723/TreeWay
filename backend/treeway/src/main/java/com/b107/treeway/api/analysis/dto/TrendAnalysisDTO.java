package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrendAnalysisDTO {
    private Long id;
    private String trendType;
    private String trendCount;
    private Integer SIG_CD;
}
