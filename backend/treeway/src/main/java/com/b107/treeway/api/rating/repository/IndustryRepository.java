package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.entity.IndustryDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IndustryRepository extends JpaRepository<IndustryDetail, Integer> {
}
