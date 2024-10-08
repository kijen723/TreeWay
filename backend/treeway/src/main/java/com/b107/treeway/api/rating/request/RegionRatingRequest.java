package com.b107.treeway.api.rating.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RegionRatingRequest {
    private int businessTime;
    private int industryItemId;
    private int cost;
}
