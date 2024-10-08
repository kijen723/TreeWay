package com.b107.treeway.api.policy.service;

import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import com.b107.treeway.api.policy.dto.PolicyResponse;
import com.b107.treeway.api.policy.dto.PolicyScrapRequest;
import com.b107.treeway.api.policy.entity.Policy;
import com.b107.treeway.api.policy.entity.PolicyScrap;
import com.b107.treeway.api.policy.repository.PolicyRepository;
import com.b107.treeway.api.policy.repository.PolicyScrapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    @Autowired
    private PolicyScrapRepository policyScrapRepository;

    @Autowired
    private MemberRepository memberRepository;

    public List<PolicyResponse> getAllPolicies() {
        return policyRepository.findAllPoliciesWithRegion();
    }

    public String scrapPolicy(PolicyScrapRequest request) {
        boolean exists = policyScrapRepository.existsByPolicyIdAndMemberId(request.getPolicyId(), request.getMemberId());
        if (exists) {
            return "이미 스크랩된 정책입니다.";
        }

        Policy policy = policyRepository.findById(request.getPolicyId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid policy ID"));
        Member member = memberRepository.findById(request.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid member ID"));

        PolicyScrap policyScrap = new PolicyScrap();
        policyScrap.setPolicy(policy);
        policyScrap.setMember(member);

        policyScrapRepository.save(policyScrap);
        return "스크랩 완료!";
    }

    public void deletePolicyScrap(Long memberId, Long policyId) {
        PolicyScrap policyScrap = policyScrapRepository.findByMemberIdAndPolicyId(memberId, policyId)
                .orElseThrow(() -> new IllegalArgumentException("해당 스크랩이 존재하지 않습니다."));
        policyScrapRepository.delete(policyScrap);
    }

    public boolean isPolicyScraped(Long policyId, Long memberId) {
        return policyScrapRepository.existsByPolicyIdAndMemberId(policyId, memberId);
    }

    public List<PolicyResponse> getScrappedPoliciesByMember(Long memberId) {
        return policyRepository.findScrappedPoliciesByMember(memberId);
    }

}
