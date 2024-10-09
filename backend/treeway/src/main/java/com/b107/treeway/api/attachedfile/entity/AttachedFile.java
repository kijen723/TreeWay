package com.b107.treeway.api.attachedfile.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "article_attached_file")
public class AttachedFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_attached_file_id")
    private Long id;

    @Column(name = "file_name", nullable = false, length = 3000)
    private String fileName;

    @Column(name = "file_path", nullable = false, length = 3000)
    private String filePath;

    @Column(name = "article_id", nullable = false)
    private Long articleId;

}
