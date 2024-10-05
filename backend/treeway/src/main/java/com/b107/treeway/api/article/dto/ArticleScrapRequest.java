package com.b107.treeway.api.article.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArticleScrapRequest {
    private Long articleId;
    private Long memberId;

    public ArticleScrapRequest(Long articleId, Long memberId) {
        this.articleId = articleId;
        this.memberId = memberId;
    }
}
