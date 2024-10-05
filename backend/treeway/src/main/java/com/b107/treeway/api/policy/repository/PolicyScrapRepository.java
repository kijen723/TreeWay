package com.b107.treeway.api.policy.repository;

import com.b107.treeway.api.policy.entity.PolicyScrap;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PolicyScrapRepository extends JpaRepository<PolicyScrap, Long> {
    boolean existsByPolicyIdAndMemberId(Long policyId, Long memberId);
    Optional<PolicyScrap> findByMemberIdAndPolicyId(Long memberId, Long policyId);
}
