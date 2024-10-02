package com.b107.treeway.api.recommend.service;

import com.b107.treeway.api.recommend.entity.JobRecommend;
import com.b107.treeway.api.recommend.repository.RecommendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RecommendService {

    private final RecommendRepository recommendRepository;

    public List<JobRecommend> findAll() {
        System.out.println("1");
        List<JobRecommend> list = recommendRepository.findAll();
        System.out.println(Arrays.toString(list.toArray()));
        return list;
    }
}
