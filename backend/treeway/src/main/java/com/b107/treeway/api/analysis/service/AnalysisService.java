package com.b107.treeway.api.analysis.service;

import com.b107.treeway.api.analysis.dto.*;
import com.b107.treeway.api.analysis.entity.KeywordAnalysis;
import com.b107.treeway.api.analysis.entity.TrendAnalysis;
import com.b107.treeway.api.analysis.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AnalysisService {
    @Autowired
    private IndustryAnalysisRepository industryAnalysisRepository;

    @Autowired
    private PopulationAnalysisRepository populationAnalysisRepository;

    @Autowired
    private RegionAnalysisRepository regionAnalysisRepository;

    @Autowired
    private TrendAnalysisRepository trendAnalysisRepository;

    @Autowired
    private KeywordAnalysisRepository keywordAnalysisRepository;

    public AnalysisResponse getAnalysisData(Long regionId, Long industryDetailId) {
        List<IndustryAnalysisResponse> industryAnalysisList = industryAnalysisRepository.findByRegionIdAndIndustryDetailIdWithDetails(regionId, industryDetailId);
        List<PopulationAnalysisResponse> populationAnalysisList = populationAnalysisRepository.findByRegionIdWithDetails(regionId);
        List<RegionAnalysisResponse> regionAnalysisList = regionAnalysisRepository.findByRegionIdWithDetails(regionId);

        return new AnalysisResponse(industryAnalysisList, populationAnalysisList, regionAnalysisList);
    }

    public TrendAnalysisResponse getTrendAndKeywordAnalysis(Integer SIG_CD) {
        List<TrendAnalysis> trendAnalyses = trendAnalysisRepository.findBySigCd(SIG_CD);
        List<KeywordAnalysis> keywordAnalyses = keywordAnalysisRepository.findBySigCd(SIG_CD);

        // TrendAnalysis -> TrendAnalysisDTO 변환
        List<TrendAnalysisDTO> trendAnalysisDTOs = trendAnalyses.stream().map(trend -> {
            TrendAnalysisDTO dto = new TrendAnalysisDTO();
            dto.setId(trend.getId());
            dto.setTrendType(trend.getTrendType());
            dto.setTrendCount(trend.getTrendCount());
            dto.setSIG_CD(trend.getSigCd());  // sig_cd -> SIG_CD로 변환
            return dto;
        }).collect(Collectors.toList());

        // KeywordAnalysis -> KeywordAnalysisDTO 변환
        List<KeywordAnalysisDTO> keywordAnalysisDTOs = keywordAnalyses.stream().map(keyword -> {
            KeywordAnalysisDTO dto = new KeywordAnalysisDTO();
            dto.setId(keyword.getId());
            dto.setKeyword(keyword.getKeyword());
            dto.setCount(keyword.getCount());
            dto.setSIG_CD(keyword.getSigCd());  // sig_cd -> SIG_CD로 변환
            return dto;
        }).collect(Collectors.toList());

        return new TrendAnalysisResponse(trendAnalysisDTOs, keywordAnalysisDTOs);
    }

}
