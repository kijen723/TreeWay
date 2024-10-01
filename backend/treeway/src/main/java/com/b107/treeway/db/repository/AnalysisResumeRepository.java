package com.b107.treeway.db.repository;

import com.b107.treeway.db.entity.AnalysisResume;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface AnalysisResumeRepository extends JpaRepository<AnalysisResume, Long> {
}
