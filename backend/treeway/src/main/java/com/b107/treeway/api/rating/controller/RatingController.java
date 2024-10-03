package com.b107.treeway.api.rating.controller;

import com.b107.treeway.api.rating.request.IndustryRequest;
import com.b107.treeway.api.rating.response.IndustryResponse;
import com.b107.treeway.api.rating.service.RegionService;
import com.b107.treeway.api.rating.service.RatingService;
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

    @GetMapping("/industry")
    @Operation(summary = "업종 추천")
    public ResponseEntity<List<IndustryResponse>> findRecommend(@RequestParam("businessTime") int businessTime,
                                                                @RequestParam("region") int region,
                                                                @RequestParam("cost") int cost){

        IndustryRequest industryRequest = new IndustryRequest(businessTime, region, cost);

        System.out.println("선택지가 전부 무관일태 추천 요청");
        List<IndustryResponse> industryRating = ratingService.getIndustryRating(industryRequest);
        for (IndustryResponse industryResponse : industryRating) {
            System.out.println(industryResponse.getRegionDetail()
                    + " " + industryResponse.getIndustryDetailName()
                    + " " + industryResponse.getCost()+ "\n");
        }

        return ResponseEntity.ok().body(industryRating);

    }
}
