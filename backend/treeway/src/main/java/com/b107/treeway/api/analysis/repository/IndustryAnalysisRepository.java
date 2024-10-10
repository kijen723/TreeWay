package com.b107.treeway.api.analysis.repository;

import com.b107.treeway.api.analysis.dto.IndustryAnalysisResponse;
import com.b107.treeway.api.analysis.entity.IndustryAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IndustryAnalysisRepository extends JpaRepository<IndustryAnalysis, Long> {
    @Query("SELECT new com.b107.treeway.api.analysis.dto.IndustryAnalysisResponse(ia.id, id.id, id.industryDetailName, r.id, r.regionName, ia.dataType, ia.analysisData) " +
            "FROM IndustryAnalysis ia " +
            "JOIN ia.industryDetail id " +
            "JOIN ia.region r " +
            "WHERE (ia.region.id = :regionId OR ia.region.id = 1) AND ia.industryDetail.id = :industryDetailId")
    List<IndustryAnalysisResponse> findByRegionIdAndIndustryDetailIdWithDetails(@Param("regionId") Long regionId, @Param("industryDetailId") Long industryDetailId);
}
