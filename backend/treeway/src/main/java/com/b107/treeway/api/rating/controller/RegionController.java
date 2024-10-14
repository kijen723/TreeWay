package com.b107.treeway.api.rating.controller;


import com.b107.treeway.api.rating.entity.Region;
import com.b107.treeway.api.rating.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/region")
public class RegionController {

    @Autowired
    private RegionService regionService;

    // 모든 지역 데이터 반환
    @GetMapping
    public List<Region> getAllRegions() {
        return regionService.getAllRegions();
    }

}
