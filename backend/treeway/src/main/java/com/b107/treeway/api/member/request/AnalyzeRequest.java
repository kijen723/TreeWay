package com.b107.treeway.api.member.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AnalyzeRequest {
    private Long memberId;
    private Long analysisId;
}
