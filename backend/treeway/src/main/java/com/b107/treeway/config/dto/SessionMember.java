package com.b107.treeway.config.dto;

import com.b107.treeway.api.member.entity.Member;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionMember implements Serializable {
    private final String nickname;
    private final String memberEmail;

    public SessionMember(Member member) {
        this.nickname = member.getName();
        this.memberEmail = member.getEmail();
    }
}