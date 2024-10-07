package com.b107.treeway.api.analysis.service;

import com.b107.treeway.api.analysis.dto.AnalysisResponse;
import com.b107.treeway.api.analysis.dto.IndustryAnalysisResponse;
import com.b107.treeway.api.analysis.dto.PopulationAnalysisResponse;
import com.b107.treeway.api.analysis.dto.RegionAnalysisResponse;
import com.b107.treeway.api.analysis.repository.IndustryAnalysisRepository;
import com.b107.treeway.api.analysis.repository.PopulationAnalysisRepository;
import com.b107.treeway.api.analysis.repository.RegionAnalysisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnalysisService {
    @Autowired
    private IndustryAnalysisRepository industryAnalysisRepository;

    @Autowired
    private PopulationAnalysisRepository populationAnalysisRepository;

    @Autowired
    private RegionAnalysisRepository regionAnalysisRepository;

    public AnalysisResponse getAnalysisData(Long regionId, Long industryDetailId) {
        List<IndustryAnalysisResponse> industryAnalysisList = industryAnalysisRepository.findByRegionIdAndIndustryDetailIdWithDetails(regionId, industryDetailId);
        List<PopulationAnalysisResponse> populationAnalysisList = populationAnalysisRepository.findByRegionIdWithDetails(regionId);
        List<RegionAnalysisResponse> regionAnalysisList = regionAnalysisRepository.findByRegionIdWithDetails(regionId);

        return new AnalysisResponse(industryAnalysisList, populationAnalysisList, regionAnalysisList);
    }
}
