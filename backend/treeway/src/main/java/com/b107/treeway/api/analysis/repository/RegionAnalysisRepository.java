package com.b107.treeway.api.analysis.repository;

import com.b107.treeway.api.analysis.dto.RegionAnalysisResponse;
import com.b107.treeway.api.analysis.entity.RegionAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RegionAnalysisRepository extends JpaRepository<RegionAnalysis, Long> {
    @Query("SELECT new com.b107.treeway.api.analysis.dto.RegionAnalysisResponse(ra.id, r.id, r.regionName, ra.activity_status, ra.analysis_data) " +
            "FROM RegionAnalysis ra " +
            "JOIN ra.region r " +
            "WHERE ra.region.id = :regionId")
    List<RegionAnalysisResponse> findByRegionIdWithDetails(@Param("regionId") Long regionId);
}
