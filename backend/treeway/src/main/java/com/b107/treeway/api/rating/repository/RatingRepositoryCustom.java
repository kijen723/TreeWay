package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.request.RatingRequest;
import com.b107.treeway.api.rating.request.RegionRatingRequest;
import com.b107.treeway.api.rating.request.SubRatingRequest;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import com.b107.treeway.api.rating.response.RatingResponse;
import com.b107.treeway.api.rating.response.RegionRatingResponse;

import java.util.List;


public interface RatingRepositoryCustom {
        List<RatingResponse> getIndustryRating(SubRatingRequest subRatingRequest);
        List<RegionRatingResponse> getRegionRating(RegionRatingRequest regionRatingRequest);
        List<?> getSubRating(SubRatingRequest subRatingRequest, boolean isIndustry);
        List<RatingResponse> getRating(RatingRequest ratingRequest);
}
