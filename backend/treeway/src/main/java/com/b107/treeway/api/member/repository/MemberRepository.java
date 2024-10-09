package com.b107.treeway.api.member.repository;


import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.response.AnalyzeResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByMemberName(String memberName);
    Member findByEmail(String email);
    Member findByPhoneNumber(String phone);

    @Query("SELECT a FROM AnalysisResume a WHERE a.memberId = :memberId")
    List<AnalyzeResponse> findMemberAnalyze(@Param("memberId") Long memberId);


}
