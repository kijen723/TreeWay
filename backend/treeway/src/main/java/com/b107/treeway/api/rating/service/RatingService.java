package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.entity.Rating;
import com.b107.treeway.api.rating.repository.RatingRepository;
import com.b107.treeway.api.rating.response.IndustryResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RatingService {

    private final RatingRepository ratingRepository;

    public List<IndustryResponse> getIndustryRating() {
        return ratingRepository.getRatingIndustry();
    }
}
