package com.b107.treeway.api.article.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "article_attached_file")
public class ArticleAttachedFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_attached_file_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;

    @Column(name = "file_path", nullable = false, length = 3000)
    private String filePath;

    @Column(name = "file_name", nullable = false, length = 3000)
    private String fileName;

}
