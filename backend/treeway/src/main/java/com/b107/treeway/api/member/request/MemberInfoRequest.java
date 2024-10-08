package com.b107.treeway.api.member.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberInfoRequest {
    private Long memberId;
    private String birthDate;
    private String phoneNumber;
}
