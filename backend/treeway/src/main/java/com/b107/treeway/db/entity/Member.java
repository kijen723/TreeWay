package com.b107.treeway.db.entity;

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
    private Long memberId;

    @Column(name = "member_name", length = 255)
    private String memberName;

    @Column(name = "age")
    private Integer age;

    @Column(name = "phone_number", length = 50)
    private String phoneNumber;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted = false; // 기본값을 false로 설정

    @Column(name = "regist_time", nullable = false)
    private java.sql.Timestamp registTime;

    @Lob
    @Column(name = "profile_img")
    private byte[] profileImg; // MEDIUMBLOB을 byte 배열로 매핑

    @Column(name = "oauth_provider", length = 100)
    private String oauthProvider;

    @Column(name = "oauth_id", length = 100)
    private String oauthId; // Google, Kakao 등에서 받은 고유번호

    @Column(name = "oauth_email", length = 255)
    private String oauthEmail;

    @OneToMany(mappedBy = "member")
    private List<Article> article;

    @OneToMany(mappedBy = "member")
    private List<AnalysisResume> AnalysisResume;
}
