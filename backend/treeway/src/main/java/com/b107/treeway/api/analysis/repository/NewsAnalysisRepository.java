package com.b107.treeway.api.analysis.repository;

import com.b107.treeway.api.analysis.entity.NewsAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewsAnalysisRepository extends JpaRepository<NewsAnalysis, Long> {
    List<NewsAnalysis> findBySigCd(Integer SIG_CD);
}
