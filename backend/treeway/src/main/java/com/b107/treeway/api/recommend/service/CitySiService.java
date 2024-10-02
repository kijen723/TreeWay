package com.b107.treeway.api.recommend.service;

import com.b107.treeway.api.recommend.entity.CitySi;
import com.b107.treeway.api.recommend.entity.JobRecommend;
import com.b107.treeway.api.recommend.repository.CitySiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CitySiService {

    private final CitySiRepository CitySiRepository;

    public List<CitySi> findAll() {
        List<CitySi> list = CitySiRepository.findAll();
        return list;
    }
}
