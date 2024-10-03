package com.b107.treeway.api.rating.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IndustryResponse {
    private String regionName;
    private String regionDetail;
    private String industryDetailName;
    private int cost;
}
