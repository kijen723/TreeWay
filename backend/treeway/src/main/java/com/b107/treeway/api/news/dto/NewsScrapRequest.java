package com.b107.treeway.api.news.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewsScrapRequest {
    private Long memberId;
    private Long newsId;

    public NewsScrapRequest(Long memberId, Long newsId) {
        this.memberId = memberId;
        this.newsId = newsId;
    }
}
