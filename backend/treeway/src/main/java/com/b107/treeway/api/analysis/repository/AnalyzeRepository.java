package com.b107.treeway.api.analysis.repository;

import com.b107.treeway.api.analysis.entity.AnalysisResume;
import com.b107.treeway.api.member.response.AnalyzeResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnalyzeRepository extends JpaRepository<AnalysisResume, Long> {
    @Modifying
    @Query("DELETE FROM AnalysisResume a WHERE a.memberId = :memberId AND a.id = :analyzeId")
    void deleteAnalyze(@Param("memberId") Long memberId, @Param("analyzeId") Long analyzeId);

    List<AnalysisResume> findByMemberId(Long memberId);

    @Query("SELECT a " +
            "FROM AnalysisResume a WHERE a.memberId = :memberId AND a.id = :analysisId")
    AnalysisResume findMemberAnalyzeDetail(@Param("memberId") Long memberId, @Param("analysisId") Long analysisId);
}
