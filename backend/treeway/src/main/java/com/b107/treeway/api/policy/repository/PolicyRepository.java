package com.b107.treeway.api.policy.repository;

import com.b107.treeway.api.policy.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PolicyRepository extends JpaRepository<Policy, Long> {
}
