package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.entity.Region;
import com.b107.treeway.api.rating.repository.RegionRepository;
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
