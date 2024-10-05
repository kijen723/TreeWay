package com.b107.treeway.api.rating.controller;

import com.b107.treeway.api.rating.entity.Industry;
import com.b107.treeway.api.rating.service.IndustryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/industry")
public class IndustryController {

    @Autowired
    private IndustryService industryService;

    @GetMapping
    public List<Industry> getAllIndustry() {
        return industryService.getAllIndustry();
    }

}
