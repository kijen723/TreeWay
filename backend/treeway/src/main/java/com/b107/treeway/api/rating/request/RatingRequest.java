package com.b107.treeway.api.rating.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RatingRequest {
    private int id;
    private int industryDetailId;
    private int businessTime;
    private int region;
    private int cost;
}
