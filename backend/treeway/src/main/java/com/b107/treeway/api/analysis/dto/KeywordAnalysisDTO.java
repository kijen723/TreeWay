package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class KeywordAnalysisDTO {
    private Long id;
    private String keyword;
    private Integer count;
    private Integer SIG_CD;

}
