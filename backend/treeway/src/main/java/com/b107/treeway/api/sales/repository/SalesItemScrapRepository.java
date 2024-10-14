package com.b107.treeway.api.sales.repository;

import com.b107.treeway.api.sales.entity.SalesItemScrap;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SalesItemScrapRepository extends JpaRepository<SalesItemScrap, Long> {
    Optional<SalesItemScrap> findByMemberIdAndSalesItemId(Long memberId, Long salesItemId);
    boolean existsBySalesItemIdAndMemberId(Long salesItemId, Long memberId);
}
