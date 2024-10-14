package com.b107.treeway.api.article.dto;

import com.b107.treeway.api.attachedfile.dto.AttachedFileResponse;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class ArticleResponse {
    private Long id;
    private Long memberId;
    private String memberName;
    private Long industryDetailId;
    private String industryDetailName;
    private Long regionId;
    private String regionName;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Integer viewCount;
    private Long scrapCount;
    private List<AttachedFileResponse> articleAttachedFile;

    public ArticleResponse(Long id, Long memberId, String memberName, Long industryDetailId, String industryDetailName,
                           Long regionId, String regionName, String title, String content, LocalDateTime createdAt,
                           LocalDateTime modifiedAt, Integer viewCount, Long scrapCount, List<AttachedFileResponse> articleAttachedFile) {
        this.id = id;
        this.memberId = memberId;
        this.memberName = memberName;
        this.industryDetailId = industryDetailId;
        this.industryDetailName = industryDetailName;
        this.regionId = regionId;
        this.regionName = regionName;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.viewCount = viewCount;
        this.scrapCount = scrapCount;
        this.articleAttachedFile = articleAttachedFile;
    }

    public ArticleResponse(Long id, Long memberId, String memberName, Long industryDetailId, String industryDetailName, Long regionId, String regionName, String title, String content, LocalDateTime createdAt, LocalDateTime modifiedAt, Integer viewCount, Long scrapCount) {
        this.id = id;
        this.memberId = memberId;
        this.memberName = memberName;
        this.industryDetailId = industryDetailId;
        this.industryDetailName = industryDetailName;
        this.regionId = regionId;
        this.regionName = regionName;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.viewCount = viewCount;
        this.scrapCount = scrapCount;
    }
}
