package com.b107.treeway.api.member.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@Entity
@Table(name = "member")
@ToString
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id", nullable = false)
    private Long id;

    @Column(name = "member_name")
    private String memberName;
    private String name;

    private String email;

    private String role;

    @Column(name = "age")
    private Integer age;

    @Column(name = "phone_number")
    private String phoneNumber;

<<<<<<< HEAD
    @Column(name = "is_deleted")
    private Boolean isDeleted = false;

    @CreationTimestamp
    @Column(name = "registered_time", nullable = false)
    private LocalDateTime registeredTime;

=======
>>>>>>> 30661c1 (feat : 멤버 추가 정보 입력 기능 추가)
    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "is_deleted")
    private Integer isDeleted;

    @Column(name = "registered_time")
    private Timestamp registeredTime;
}