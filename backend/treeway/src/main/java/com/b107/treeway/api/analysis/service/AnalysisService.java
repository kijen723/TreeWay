package com.b107.treeway.api.analysis.service;

import com.b107.treeway.api.analysis.dto.*;
import com.b107.treeway.api.analysis.entity.KeywordAnalysis;
import com.b107.treeway.api.analysis.entity.NewsAnalysis;
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

    @Autowired
    private NewsAnalysisRepository newsAnalysisRepository;

    public AnalysisResponse getAnalysisData(Long regionId, Long industryDetailId) {
        List<IndustryAnalysisResponse> industryAnalysisList = industryAnalysisRepository.findByRegionIdAndIndustryDetailIdWithDetails(regionId, industryDetailId);
        System.out.println("industryAnalysisList" + industryAnalysisList);

        List<PopulationAnalysisResponse> populationAnalysisList = populationAnalysisRepository.findByRegionIdWithDetails(regionId);
        System.out.println("populationAnalysisList" + populationAnalysisList);

        List<RegionAnalysisResponse> regionAnalysisList = regionAnalysisRepository.findByRegionIdWithDetails(regionId);

        return new AnalysisResponse(industryAnalysisList, populationAnalysisList, regionAnalysisList);
    }

    public TrendAnalysisResponse getTrendAndKeywordAnalysis(Integer SIG_CD) {
        List<TrendAnalysis> trendAnalyses = trendAnalysisRepository.findBySigCd(SIG_CD);
        List<KeywordAnalysis> keywordAnalyses = keywordAnalysisRepository.findBySigCd(SIG_CD);
        List<NewsAnalysis> newsAnalyses = newsAnalysisRepository.findBySigCd(SIG_CD);

        List<TrendAnalysisDTO> trendAnalysisDTOs = trendAnalyses.stream().map(trend -> {
            TrendAnalysisDTO dto = new TrendAnalysisDTO();
            dto.setId(trend.getId());
            dto.setTrendType(trend.getTrendType());
            dto.setTrendCount(trend.getTrendCount());
            dto.setSIG_CD(trend.getSigCd());
            return dto;
        }).collect(Collectors.toList());

        List<KeywordAnalysisDTO> keywordAnalysisDTOs = keywordAnalyses.stream().map(keyword -> {
            KeywordAnalysisDTO dto = new KeywordAnalysisDTO();
            dto.setId(keyword.getId());
            dto.setKeyword(keyword.getKeyword());
            dto.setCount(keyword.getCount());
            dto.setSIG_CD(keyword.getSigCd());
            return dto;
        }).collect(Collectors.toList());

        List<NewsAnalysisDTO> newsAnalysisDTOs = newsAnalyses.stream().map(news -> {
            NewsAnalysisDTO dto = new NewsAnalysisDTO();
            dto.setId(news.getId());
            dto.setTitle(news.getKeyword());
            dto.setContent(news.getContent());
            dto.setDate(news.getDate());
            dto.setUrl(news.getUrl());
            dto.setSIG_CD(news.getSigCd());
            return dto;
        }).collect(Collectors.toList());

        return new TrendAnalysisResponse(trendAnalysisDTOs, keywordAnalysisDTOs, newsAnalysisDTOs);
    }

}
