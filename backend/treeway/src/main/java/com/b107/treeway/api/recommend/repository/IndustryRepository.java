package com.b107.treeway.api.recommend.repository;

import com.b107.treeway.api.recommend.entity.IndustryDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IndustryRepository extends JpaRepository<IndustryDetail, Integer> {
}
