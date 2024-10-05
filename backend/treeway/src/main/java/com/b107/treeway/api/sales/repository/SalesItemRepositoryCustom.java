package com.b107.treeway.api.sales.repository;


import com.b107.treeway.api.sales.request.MapSalesRequest;
import com.b107.treeway.api.sales.response.MapSalesResponse;

import java.util.List;

public interface SalesItemRepositoryCustom {
    List<MapSalesResponse> getMapSales(MapSalesRequest mapSalesRequest);
}
