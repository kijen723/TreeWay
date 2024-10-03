package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.entity.BusinessHour;
import com.b107.treeway.api.rating.entity.Rating;
import com.b107.treeway.api.rating.repository.BusinessHourRepository;
import com.b107.treeway.api.rating.repository.RatingRepository;
import com.b107.treeway.api.rating.request.IndustryRequest;
import com.b107.treeway.api.rating.response.IndustryResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingService {

    private final RatingRepository ratingRepository;
    private final BusinessHourRepository br;

    public List<IndustryResponse> getIndustryRating(IndustryRequest industryRequest) {
        return ratingRepository.getRatingIndustry(industryRequest);
    }
}
