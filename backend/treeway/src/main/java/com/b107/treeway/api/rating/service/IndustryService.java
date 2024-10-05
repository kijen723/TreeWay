package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.entity.Industry;
import com.b107.treeway.api.rating.repository.IndustryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndustryService {

    @Autowired
    private IndustryRepository industryRepository;

    public List<Industry> getAllIndustry() {
        return industryRepository.findAll();
    }

}
