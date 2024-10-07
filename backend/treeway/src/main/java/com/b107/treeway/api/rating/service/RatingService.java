package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.repository.BusinessHourRepository;
import com.b107.treeway.api.rating.repository.RatingRepository;
import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.request.SubRatingRequest;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingService {

    private final RatingRepository ratingRepository;

    public List<RatingResponse> getIndustryRating(SubRatingRequest subRatingRequest) {
        return ratingRepository.getIndustryRating(subRatingRequest);
    }

    public List<RegionRatingResponse> getRatingRegion(SubRatingRequest subRatingRequest) {
        return ratingRepository.getRegionRating(subRatingRequest);
    }

    public List<RatingResponse> getRating(RatingRequest ratingRequest) {
        return ratingRepository.getRating(ratingRequest);
    }

}
