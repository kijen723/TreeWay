package com.b107.treeway.api.rating.controller;

import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;
import com.b107.treeway.api.rating.service.RatingService;
import com.b107.treeway.api.rating.service.RegionService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rating")
@RequiredArgsConstructor
public class RatingController {
    private final RatingService ratingService;
    private final RegionService regionService;

//    business_time : int,
//    region : int,
//    cost : int

    @PostMapping("/industry")
    @Operation(summary = "종합 추천")
    public ResponseEntity<List<IndustryRatingResponse>> getIndustryRating(@RequestBody RatingRequest ratingRequest){
        List<IndustryRatingResponse> Rating = ratingService.getIndustryRating(ratingRequest);
        return ResponseEntity.ok().body(Rating);
    }

    @PostMapping("/region")
    @Operation(summary = "지역 추천")
    public ResponseEntity<List<RegionRatingResponse>> getRegionRating(@RequestBody RatingRequest ratingRequest){
        List<RegionRatingResponse> regionRating = ratingService.getRatingRegion(ratingRequest);
        return ResponseEntity.ok().body(regionRating);
    }
}
