package com.b107.treeway.api.member.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id", nullable = false)
    private Long id;

    @Column(name = "member_name", nullable = false, length = 255)
    private String memberName;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "phone_number", nullable = false, unique = true, length = 255)
    private String phoneNumber;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted = false;

    @Column(name = "registed_time", nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private java.sql.Timestamp registedTime;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "oauth_email", length = 255)
    private String oauthEmail;

    @Column(name = "oauth_id", length = 255)
    private String oauthId;

    @Column(name = "oauth_provider", length = 255)
    private String oauthProvider;

}
