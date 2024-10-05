package com.b107.treeway.api.article.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArticleCommentRequest {
    private Long articleId;
    private Long memberId;
    private String content;

    public ArticleCommentRequest(Long articleId, Long memberId, String content) {
        this.articleId = articleId;
        this.memberId = memberId;
        this.content = content;
    }
}
