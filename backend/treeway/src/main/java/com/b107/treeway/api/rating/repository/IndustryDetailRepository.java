package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.entity.Industry;
import com.b107.treeway.api.rating.entity.IndustryDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IndustryDetailRepository extends JpaRepository<IndustryDetail, Long> {
    List<IndustryDetail> findByIndustryId(Long industryId);
}
