package com.b107.treeway.db.entity;

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
    private Long articleAttachedFileId;

    @Column(name = "article_id", nullable = false)
    private Long articleId; // 게시글 ID, FK로 사용

    @Column(name = "file_path", length = 3000)
    private String filePath;

    @Column(name = "file_name", length = 3000)
    private String fileName;

    // 필요한 경우 추가적인 메서드나 로직을 여기에 구현할 수 있습니다.
}
