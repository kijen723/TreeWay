package com.b107.treeway.api.policy.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PolicyScrapRequest {
    private Long policyId;
    private Long memberId;

    public PolicyScrapRequest(Long policyId, Long memberId) {
        this.policyId = policyId;
        this.memberId = memberId;
    }
}
