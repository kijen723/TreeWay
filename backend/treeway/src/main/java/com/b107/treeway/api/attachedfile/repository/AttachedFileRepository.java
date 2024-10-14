package com.b107.treeway.api.attachedfile.repository;

import com.b107.treeway.api.attachedfile.entity.AttachedFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AttachedFileRepository extends JpaRepository<AttachedFile, Long> {
    List<AttachedFile> findByArticleId(Long articleId);
}
