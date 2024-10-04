package com.b107.treeway.api.member.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id", nullable = false)
    private Long id;

    @Column(name = "member_name", nullable = false)
    private String memberName;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "phone_number", nullable = false, unique = true)
    private String phoneNumber;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted = false;

    @CreationTimestamp
    @Column(name = "registed_time", nullable = false)
    private LocalDateTime registedTime;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "oauth_email")
    private String oauthEmail;

    @Column(name = "oauth_id")
    private String oauthId;

    @Column(name = "oauth_provider")
    private String oauthProvider;

}
