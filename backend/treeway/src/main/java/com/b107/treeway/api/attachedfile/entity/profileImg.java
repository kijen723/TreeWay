package com.b107.treeway.api.attachedfile.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "profile_img")
public class profileImg {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_img_id")
    private Long id;

    @Column(name = "file_name", length = 3000)
    private String fileName;

    @Column(name = "file_path" , length = 3000)
    private String filePath;

    @Column(name = "member_id")
    private Long memberId;

}
