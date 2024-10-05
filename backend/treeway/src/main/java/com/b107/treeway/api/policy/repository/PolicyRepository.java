package com.b107.treeway.api.policy.repository;

import com.b107.treeway.api.policy.dto.PolicyResponse;
import com.b107.treeway.api.policy.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PolicyRepository extends JpaRepository<Policy, Long> {
    @Query("SELECT new com.b107.treeway.api.policy.dto.PolicyResponse(p.id, r.id, r.regionName, p.title, p.category, p.host, p.eligibility, p.target, p.url, p.start_date, p.end_date, p.viewCount) " +
            "FROM Policy p JOIN p.region r")
    List<PolicyResponse> findAllPoliciesWithRegion();
}
