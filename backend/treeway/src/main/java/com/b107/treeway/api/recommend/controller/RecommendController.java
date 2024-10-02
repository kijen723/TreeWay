package com.b107.treeway.api.recommend.controller;

import com.b107.treeway.api.recommend.entity.Region;
import com.b107.treeway.api.recommend.entity.Rating;
import com.b107.treeway.api.recommend.service.CitySiService;
import com.b107.treeway.api.recommend.service.RecommendService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/recommend")
@RequiredArgsConstructor
public class RecommendController {
    private final RecommendService recommendService;
    private final CitySiService citySiService;

    @GetMapping
    @Operation(summary = "추천 조회")
    public ResponseEntity<List<Region>> findRecommend(){
        List<Rating> rating = recommendService.findAll();
        List<Region> city = citySiService.findAll();

        return ResponseEntity.ok().body(city);
    }
}
