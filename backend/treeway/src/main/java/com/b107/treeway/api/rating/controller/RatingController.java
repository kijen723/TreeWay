package com.b107.treeway.api.rating.controller;

import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.request.RegionRatingRequest;
import com.b107.treeway.api.rating.request.SubRatingRequest;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;
import com.b107.treeway.api.rating.service.RatingService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/rating")
@RequiredArgsConstructor
public class RatingController {
    private final RatingService ratingService;

    @PostMapping("/industry")
    @Operation(summary = "업종 추천")
    public ResponseEntity<List<RatingResponse>> getIndustryRating(@RequestBody SubRatingRequest subRatingRequest){
        List<RatingResponse> Rating = ratingService.getIndustryRating(subRatingRequest);
        return ResponseEntity.ok().body(Rating);
    }

    @PostMapping("/region")
    @Operation(summary = "지역 추천")
    public ResponseEntity<List<RegionRatingResponse>> getRegionRating(@RequestBody RegionRatingRequest regionRatingRequest){
        List<RegionRatingResponse> regionRating = ratingService.getRatingRegion(regionRatingRequest);
        return ResponseEntity.ok().body(regionRating);
    }

    @PostMapping
    @Operation(summary = "종합 추천")
    public ResponseEntity<List<RatingResponse>> getRating(@RequestBody RatingRequest ratingRequest){
        List<RatingResponse> regionRating = ratingService.getRating(ratingRequest);
        return ResponseEntity.ok().body(regionRating);
    }
}
