package com.b107.treeway.api.rating.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IndustryResponse {
    private String regionName;
    private String industryDetailName;
    private double ratingScore;
}
