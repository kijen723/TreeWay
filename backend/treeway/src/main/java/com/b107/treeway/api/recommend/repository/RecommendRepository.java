package com.b107.treeway.api.recommend.repository;

import com.b107.treeway.api.recommend.entity.JobRecommend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendRepository extends JpaRepository<JobRecommend, Long> {
}
