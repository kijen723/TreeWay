package com.b107.treeway.api.rating.controller;

import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;
import com.b107.treeway.api.rating.service.RatingService;
import com.b107.treeway.api.rating.service.RegionService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping
    @Operation(summary = "종합 추천")
    public ResponseEntity<List<RatingResponse>> getRating(@RequestParam("businessTime") int businessTime,
                                                              @RequestParam("region") int region,
                                                              @RequestParam("cost") int cost){

        RatingRequest ratingRequest = new RatingRequest(businessTime, region, cost);

        List<RatingResponse> Rating = ratingService.getRating(ratingRequest);
        for (RatingResponse ratingResponse : Rating) {
            System.out.println(ratingResponse.getRegionDetail()
                    + " " + ratingResponse.getIndustryDetailName()
                    + " " + ratingResponse.getCost()+ "\n");
        }

        return ResponseEntity.ok().body(Rating);
    }

    @GetMapping("/region")
    @Operation(summary = "지역 추천")
    public ResponseEntity<List<RegionRatingResponse>> getRatingRegion(@RequestParam("businessTime") int businessTime,
                                                                  @RequestParam("region") int region,
                                                                  @RequestParam("cost") int cost){

        RatingRequest ratingRequest = new RatingRequest(businessTime, region, cost);

        List<RegionRatingResponse> regionRating = ratingService.getRatingRegion(ratingRequest);
//        for (RegionRatingResponse regionRatingResponse : regionRating) {
//            System.out.println(regionRatingResponse.getRegionName()
//                    + " " + regionRatingResponse.getRegionDetail() + "\n");
//        }

        return ResponseEntity.ok().body(regionRating);
    }
}
