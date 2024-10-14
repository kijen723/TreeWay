package com.b107.treeway.api.article.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ArticleCommentResponse {
    private Long id;
    private Long memberId;
    private String memberName;
    private Long articleId;
    private String content;
    private LocalDateTime createdAt;

    public ArticleCommentResponse(Long id, Long memberId, String memberName, Long articleId, String content, LocalDateTime createdAt) {
        this.id = id;
        this.memberId = memberId;
        this.memberName = memberName;
        this.articleId = articleId;
        this.content = content;
        this.createdAt = createdAt;
    }
}
