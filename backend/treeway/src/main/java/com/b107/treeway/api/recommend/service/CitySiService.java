package com.b107.treeway.api.recommend.service;

import com.b107.treeway.api.recommend.entity.Region;
import com.b107.treeway.api.recommend.repository.RegionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CitySiService {

    private final RegionRepository RegionRepository;

    public List<Region> findAll() {
        List<Region> list = RegionRepository.findAll();
        return list;
    }
}
