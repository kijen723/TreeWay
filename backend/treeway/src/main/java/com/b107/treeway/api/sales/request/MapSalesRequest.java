package com.b107.treeway.api.sales.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MapSalesRequest {
    private Double swLongitude;
    private Double swLatitude;
    private Double neLongitude;
    private Double neLatitude;
}
