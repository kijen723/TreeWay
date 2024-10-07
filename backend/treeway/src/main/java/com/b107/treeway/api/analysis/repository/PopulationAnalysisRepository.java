package com.b107.treeway.api.analysis.repository;

import com.b107.treeway.api.analysis.dto.PopulationAnalysisResponse;
import com.b107.treeway.api.analysis.entity.PopulationAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PopulationAnalysisRepository extends JpaRepository<PopulationAnalysis, Long> {

    @Query("SELECT new com.b107.treeway.api.analysis.dto.PopulationAnalysisResponse(pa.id, r.id, r.regionName, pa.gender, pa.trend_index, pa.activity_status, pa.analysis_data) " +
            "FROM PopulationAnalysis pa " +
            "JOIN pa.region r " +
            "WHERE pa.region.id = :regionId")
    List<PopulationAnalysisResponse> findByRegionIdWithDetails(@Param("regionId") Long regionId);

}
