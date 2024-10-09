package com.b107.treeway.api.attachedfile.repository;

import com.b107.treeway.api.attachedfile.entity.AttachedFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttachedFileRepository extends JpaRepository<AttachedFile, Long> {
}
