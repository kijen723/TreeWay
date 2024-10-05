package com.b107.treeway.api.sales.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SalesItemScrapResponse {

    @JsonProperty("isScraped")
    private boolean isScraped;

    public SalesItemScrapResponse(boolean isScraped) {
        this.isScraped = isScraped;
    }

}
