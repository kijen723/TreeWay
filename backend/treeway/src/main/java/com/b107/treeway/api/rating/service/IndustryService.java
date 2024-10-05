package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.entity.Industry;
import com.b107.treeway.api.rating.entity.IndustryDetail;
import com.b107.treeway.api.rating.repository.IndustryDetailRepository;
import com.b107.treeway.api.rating.repository.IndustryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndustryService {

    @Autowired
    private IndustryRepository industryRepository;

    @Autowired
    private IndustryDetailRepository industryDetailRepository;

    public List<Industry> getAllIndustry() {
        return industryRepository.findAll();
    }

    public List<IndustryDetail> getIndustryDetailsByIndustryId(Long industryId) {

        return industryDetailRepository.findByIndustryId(industryId);
    }

}
