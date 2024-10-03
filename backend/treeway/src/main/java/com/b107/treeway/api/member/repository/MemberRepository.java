package com.b107.treeway.api.member.repository;


import com.b107.treeway.api.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
