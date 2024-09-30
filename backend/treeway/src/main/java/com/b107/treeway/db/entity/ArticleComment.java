package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "article_comments")
public class ArticleComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_comment_id", nullable = false)
    private Long id;

    @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "member_id", nullable = false)
    private Long memberId = 1L; // 기본값 1로 설정

    @Column(name = "content", length = 3000)
    private String content;

    @Column(name = "create_at")
    private LocalDateTime createAt;
}
