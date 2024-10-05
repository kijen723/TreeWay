package com.b107.treeway.api.policy.service;

import com.b107.treeway.api.policy.dto.PolicyResponse;
import com.b107.treeway.api.policy.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    public List<PolicyResponse> getAllPolicies() {
        return policyRepository.findAllPoliciesWithRegion();
    }

}
