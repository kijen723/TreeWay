package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;

import java.util.List;


public interface RatingRepositoryCustom {
        List<RatingResponse> getRating(RatingRequest ratingRequest);
        List<RegionRatingResponse> getRegionRating(RatingRequest ratingRequest);
}
