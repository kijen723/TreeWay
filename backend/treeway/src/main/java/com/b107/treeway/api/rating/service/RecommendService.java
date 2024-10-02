package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.entity.Rating;
import com.b107.treeway.api.rating.repository.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RecommendService {

    private final RatingRepository ratingRepository;

    public List<Rating> findAll() {
        System.out.println("1");
        List<Rating> list = ratingRepository.findAll();
        System.out.println(Arrays.toString(list.toArray()));
        return list;
    }
}
