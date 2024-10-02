package com.b107.treeway.api.rating.repository;

import com.b107.treeway.api.rating.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
}
