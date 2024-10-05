package com.b107.treeway.api.article.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArticleScrapResponse {

    @JsonProperty("isScraped")
    private boolean isScraped;

    public ArticleScrapResponse(boolean isScraped) {
        this.isScraped = isScraped;
    }

}
