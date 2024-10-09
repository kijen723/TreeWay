package com.b107.treeway.db.repository;

import com.b107.treeway.api.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Member, Long> {

    Member findByMemberName(String memberName);
    Member findByEmail(String email);
}