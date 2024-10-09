package com.b107.treeway.api.attachedfile.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AttachedFileResponse {
    private Long id;
    private String filePath;
    private String fileName;

    public AttachedFileResponse(Long id, String filePath, String fileName) {
        this.id = id;
        this.filePath = filePath;
        this.fileName = fileName;
    }
}