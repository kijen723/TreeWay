package com.b107.treeway.api.member.repository;


import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.response.AnalyzeResponse;
import com.b107.treeway.db.entity.AnalysisResume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByMemberName(String memberName);

    @Query("SELECT a FROM AnalysisResume a WHERE a.member.id = :memberId")
    List<AnalyzeResponse> findMemberAnalyze(@Param("memberId") Long memberId);

    @Query("SELECT a.id, a.member.id " +
            "FROM AnalysisResume a WHERE a.member.id = :memberId AND a.id = :analysisId")
    AnalyzeResponse findMemberAnalyzeDetail(@Param("memberId") Long memberId, @Param("analysisId") Long analysisId);
}
