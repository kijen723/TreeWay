package com.b107.treeway.api.rating.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IndustryRatingResponse {
    private String regionName;
    private String industryDetailName;
    private double ratingScore;
}
