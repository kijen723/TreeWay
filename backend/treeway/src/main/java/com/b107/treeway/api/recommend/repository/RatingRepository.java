package com.b107.treeway.api.recommend.repository;

import com.b107.treeway.api.recommend.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
}
