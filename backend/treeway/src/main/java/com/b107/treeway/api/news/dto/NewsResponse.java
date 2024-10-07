package com.b107.treeway.api.news.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class NewsResponse {
    private Long id;
    private Long regionId;
    private String regionName;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private String url;
    private Integer viewCount;
    private Long scrapCount;

    public NewsResponse(Long id, Long regionId, String regionName, String title, String content, LocalDateTime createdAt, String url, Integer viewCount, Long scrapCount) {
        this.id = id;
        this.regionId = regionId;
        this.regionName = regionName;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.url = url;
        this.viewCount = viewCount;
        this.scrapCount = scrapCount;
    }
}
