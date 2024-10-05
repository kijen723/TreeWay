package com.b107.treeway.api.policy.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class PolicyResponse {
    private Long id;
    private Long regionId;
    private String regionName;
    private String title;
    private String category;
    private String host;
    private String eligibility;
    private String target;
    private String url;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Integer viewCount;

    public PolicyResponse(Long id, Long regionId, String regionName, String title, String category,
                          String host, String eligibility, String target, String url,
                          LocalDateTime startDate, LocalDateTime endDate, Integer viewCount) {
        this.id = id;
        this.regionId = regionId;
        this.regionName = regionName;
        this.title = title;
        this.category = category;
        this.host = host;
        this.eligibility = eligibility;
        this.target = target;
        this.url = url;
        this.startDate = startDate;
        this.endDate = endDate;
        this.viewCount = viewCount;
    }
}
