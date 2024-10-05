package com.b107.treeway.api.sales.controller;

import com.b107.treeway.api.rating.request.SubRatingRequest;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import com.b107.treeway.api.sales.request.MapSalesRequest;
import com.b107.treeway.api.sales.response.MapSalesResponse;
import com.b107.treeway.api.sales.service.SalesItemService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/sales")
@RequiredArgsConstructor
public class SalesItemController {
    private final SalesItemService salesItemService;

    @PostMapping("/map")
    @Operation(summary = "지도 범위 내 매물")
    public ResponseEntity<List<MapSalesResponse>> getMapSales(@RequestBody MapSalesRequest mapSalesRequest){
        List<MapSalesResponse> mapSales = salesItemService.getMapSales(mapSalesRequest);
        return ResponseEntity.ok().body(mapSales);
    }
}
