package com.b107.treeway.api.policy.controller;

import com.b107.treeway.api.policy.dto.PolicyResponse;
import com.b107.treeway.api.policy.dto.PolicyScrapRequest;
import com.b107.treeway.api.policy.entity.Policy;
import com.b107.treeway.api.policy.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/policy")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    @GetMapping
    public ResponseEntity<List<PolicyResponse>> getAllPolicies() {
        List<PolicyResponse> policies = policyService.getAllPolicies();
        return ResponseEntity.ok(policies);
    }

    @PostMapping("/scrap")
    public ResponseEntity<String> scrapPolicy(@RequestBody PolicyScrapRequest request) {
        String response = policyService.scrapPolicy(request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/scrap")
    public ResponseEntity<String> deleteScrapPolicy(@RequestBody PolicyScrapRequest request) {
        policyService.deletePolicyScrap(request.getMemberId(), request.getPolicyId());
        return ResponseEntity.ok("스크랩이 삭제되었습니다.");
    }

}
