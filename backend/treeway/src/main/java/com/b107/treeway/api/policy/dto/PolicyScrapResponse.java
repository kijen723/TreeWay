package com.b107.treeway.api.policy.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PolicyScrapResponse {

    @JsonProperty("isScraped")
    private boolean isScraped;

    public PolicyScrapResponse(boolean isScraped) {
        this.isScraped = isScraped;
    }

}
