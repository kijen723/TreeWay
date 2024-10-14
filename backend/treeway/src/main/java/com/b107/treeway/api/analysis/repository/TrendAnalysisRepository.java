package com.b107.treeway.api.analysis.repository;

import com.b107.treeway.api.analysis.entity.TrendAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrendAnalysisRepository extends JpaRepository<TrendAnalysis, Long> {
    List<TrendAnalysis> findBySigCd(Integer SIG_CD);
}
