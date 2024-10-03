package com.b107.treeway.api.policy.controller;

import com.b107.treeway.api.policy.entity.Policy;
import com.b107.treeway.api.policy.service.PolicyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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
    public List<Policy> getAllPolicies() {
        return policyService.getPolicies();
    }

//    @ApiResponses(value = {
//            @ApiResponse(responseCode = "200", description = "Success"),
//            @ApiResponse(responseCode = "404", description = "Not Found"),})
//    @Operation(summary = "정책 컨트롤러")
//    @GetMapping
//    public ResponseEntity<?> Policy() {
//        return ResponseEntity.ok().build();
//    }
//
//    @GetMapping("{memberId}")
//    public ResponseEntity<?> Policy2() {
//        return ResponseEntity.ok().build();
//    }
//
//    @PostMapping
//    public ResponseEntity<?> Policy3() {
//        return ResponseEntity.ok().build();
//    }
//
//    @DeleteMapping
//    public ResponseEntity<?> Policy4() {
//        return ResponseEntity.ok().build();
//    }
}
