package com.b107.treeway.api.article.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArticleDto {
    private Long memberId;
    private Long industryDetailId;
    private Long regionId;
    private String title;
    private String content;
}
