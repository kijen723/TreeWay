package com.b107.treeway.api.sales.repository;

import com.b107.treeway.api.sales.entity.SalesItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesItemItemRepository extends JpaRepository<SalesItem, Long> , SalesItemRepositoryCustom {

}
