package com.b107.treeway.api.news.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewsScrapResponse {

    @JsonProperty("isScraped")
    private boolean isScraped;

    public NewsScrapResponse(boolean isScraped) {
        this.isScraped = isScraped;
    }

}
