package com.b107.treeway.api.sales.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MapSalesRequest {
    private String swLongitude;
    private String swLatitude;
    private String neLongitude;
    private String neLatitude;
}
