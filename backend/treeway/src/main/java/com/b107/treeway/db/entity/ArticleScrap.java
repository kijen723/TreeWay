package com.b107.treeway.db.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "article_scrap")
public class ArticleScrap {

    @Id
    @Column(name = "member_id", nullable = false)
    private Long memberId; // 맴버 ID

    @Id
    @Column(name = "article_id", nullable = false)
    private Long articleId; // 게시글 ID
}
