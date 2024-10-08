package com.b107.treeway.api.analysis.repository;

import com.b107.treeway.api.analysis.entity.KeywordAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KeywordAnalysisRepository extends JpaRepository<KeywordAnalysis, Long> {
    List<KeywordAnalysis> findBySigCd(Integer SIG_CD);
}
