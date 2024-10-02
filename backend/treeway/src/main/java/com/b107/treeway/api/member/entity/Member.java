package com.b107.treeway.api.member.entity;

import com.b107.treeway.api.article.entity.Article;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id", nullable = false)
    private Long id;

    @Column(name = "member_name")
    private String memberName;

    @Column(name = "age")
    private Integer age;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted = false;

    @Column(name = "regist_time", nullable = false)
    private java.sql.Timestamp registTime;

    @Lob
    @Column(name = "profile_img")
    private byte[] profileImg;

    @Column(name = "oauth_provider", length = 100)
    private String oauthProvider;

    @Column(name = "oauth_id", length = 100)
    private String oauthId; // Google, Kakao 등에서 받은 고유번호

    @Column(name = "oauth_email", length = 255)
    private String oauthEmail;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Article> article;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<com.b107.treeway.db.entity.AnalysisResume> AnalysisResume;
}
