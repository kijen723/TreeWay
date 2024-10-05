package com.b107.treeway.api.sales.service;

import com.b107.treeway.api.sales.repository.SalesItemItemRepository;
import com.b107.treeway.api.sales.request.MapSalesRequest;
import com.b107.treeway.api.sales.response.MapSalesResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SalesItemService {
    private final SalesItemItemRepository salesItemRepository;

    public List<MapSalesResponse> getMapSales(MapSalesRequest mapSalesRequest) {
        return salesItemRepository.getMapSales(mapSalesRequest);
    }
}
