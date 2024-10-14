package com.b107.treeway.api.analysis.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class NewsAnalysisDTO {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime date;
    private String url;
    private Integer SIG_CD;
}
