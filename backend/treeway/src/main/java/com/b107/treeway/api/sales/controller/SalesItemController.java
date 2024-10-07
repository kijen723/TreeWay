package com.b107.treeway.api.sales.controller;

import com.b107.treeway.api.sales.dto.SalesItemResponse;
import com.b107.treeway.api.sales.dto.SalesItemScrapRequest;
import com.b107.treeway.api.sales.dto.SalesItemScrapResponse;
import com.b107.treeway.api.sales.request.MapSalesRequest;
import com.b107.treeway.api.sales.response.MapSalesResponse;
import com.b107.treeway.api.sales.service.SalesItemService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/sales")
@RequiredArgsConstructor
public class SalesItemController {
    private final SalesItemService salesItemService;

    @GetMapping
    public ResponseEntity<List<SalesItemResponse>> getAllSalesItems() {
        List<SalesItemResponse> salesItems = salesItemService.getAllSalesItems();
        return ResponseEntity.ok(salesItems);
    }

    @PostMapping("/map")
    @Operation(summary = "지도 범위 내 매물")
    public ResponseEntity<List<MapSalesResponse>> getMapSales(@RequestBody MapSalesRequest mapSalesRequest){
        List<MapSalesResponse> mapSales = salesItemService.getMapSales(mapSalesRequest);
        return ResponseEntity.ok().body(mapSales);
    }

    @PostMapping("/scrap")
    public ResponseEntity<String> scrapSalesItem(@RequestBody SalesItemScrapRequest request) {
        String response = salesItemService.scrapSalesItem(request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/scrap")
    public ResponseEntity<String> deleteScrapSalesItem(@RequestBody SalesItemScrapRequest request) {
        salesItemService.deleteSalesItemScrap(request.getMemberId(), request.getSalesItemId());
        return ResponseEntity.ok("스크랩이 삭제되었습니다.");
    }

    @PostMapping("/scrap/check")
    public ResponseEntity<SalesItemScrapResponse> checkSalesItemScrap(@RequestBody SalesItemScrapRequest request) {
        boolean isScraped = salesItemService.isSalesItemScraped(request.getMemberId(), request.getSalesItemId());
        SalesItemScrapResponse response = new SalesItemScrapResponse(isScraped);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/scrap/{memberId}")
    public ResponseEntity<List<SalesItemResponse>> getScrappedSalesByMember(@PathVariable("memberId") Long memberId) {
        List<SalesItemResponse> scrappedSalesItems = salesItemService.getScrappedSalesByMember(memberId);
        return ResponseEntity.ok(scrappedSalesItems);
    }
}
