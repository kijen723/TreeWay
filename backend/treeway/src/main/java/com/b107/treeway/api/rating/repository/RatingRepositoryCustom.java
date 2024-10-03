package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.request.IndustryRequest;
import com.b107.treeway.api.rating.response.IndustryResponse;
import java.util.List;


public interface RatingRepositoryCustom {
        List<IndustryResponse> getRatingIndustry();
}
