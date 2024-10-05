package com.b107.treeway.api.rating.service;

import com.b107.treeway.api.rating.repository.IndustryDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IndustryDetailService {
    
    @Autowired
    private IndustryDetailRepository industryDetailRepository;
}
