package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.repository.BusinessHourRepository;
import com.b107.treeway.api.rating.repository.RatingRepository;
import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingService {

    private final RatingRepository ratingRepository;
    private final BusinessHourRepository br;

    public List<RatingResponse> getRating(RatingRequest ratingRequest) {
        return ratingRepository.getRating(ratingRequest);
    }

//    public List<RatingResponse> getRating(RatingRequest ratingRequest) {
//        return ratingRepository.getRating(ratingRequest);
//    }

    public List<RegionRatingResponse> getRatingRegion(RatingRequest ratingRequest) {
        return ratingRepository.getRegionRating(ratingRequest);
    }
}
