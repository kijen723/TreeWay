package com.b107.treeway.api.analysis.controller;

import com.b107.treeway.api.analysis.dto.AnalysisResponse;
import com.b107.treeway.api.analysis.dto.IndustryAnalysisResponse;
import com.b107.treeway.api.analysis.dto.TrendAnalysisResponse;
import com.b107.treeway.api.analysis.service.AnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/analysis")
public class AnalysisController {
    @Autowired
    private AnalysisService analysisService;

    @GetMapping
    public ResponseEntity<AnalysisResponse> getAnalysisData(@RequestParam Long regionId, @RequestParam Long industryDetailId) {
        AnalysisResponse analysisResponse = analysisService.getAnalysisData(regionId, industryDetailId);

        return ResponseEntity.ok(analysisResponse);
    }

    @GetMapping("/trend/{SIG_CD}")
    public ResponseEntity<TrendAnalysisResponse> getTrendAndKeywordAnalysis(@PathVariable("SIG_CD") Integer SIG_CD) {
        TrendAnalysisResponse trendAnalysisResponse = analysisService.getTrendAndKeywordAnalysis(SIG_CD);

        return ResponseEntity.ok(trendAnalysisResponse);
    }
}
