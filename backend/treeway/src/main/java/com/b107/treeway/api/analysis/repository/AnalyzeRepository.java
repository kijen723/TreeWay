package com.b107.treeway.api.analysis.repository;

import com.b107.treeway.api.member.request.AnalyzeRequest;
import com.b107.treeway.db.entity.AnalysisResume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnalyzeRepository extends JpaRepository<AnalysisResume, Long> {
    @Modifying
    @Query("DELETE FROM AnalysisResume a WHERE a.member.id = :memberId AND a.id = :analyzeId")
    void deleteAnalyze(@Param("memberId") Long memberId, @Param("analyzeId") Long analyzeId);
}
