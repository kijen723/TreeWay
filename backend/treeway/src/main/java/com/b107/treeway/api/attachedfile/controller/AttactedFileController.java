package com.b107.treeway.api.attachedfile.controller;

import com.b107.treeway.api.article.entity.Article;
import com.b107.treeway.api.attachedfile.entity.AttachedFile;
import com.b107.treeway.api.attachedfile.repository.AttachedFileRepository;
import com.b107.treeway.api.attachedfile.service.AttachedFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriUtils;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/files")
public class AttactedFileController {

    private final AttachedFileRepository attachedFileRepository;

    public AttactedFileController(AttachedFileRepository attachedFileRepository) {
        this.attachedFileRepository = attachedFileRepository;
    }

    @Autowired
    private AttachedFileService attachedFileService;

    @GetMapping("/download/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable Long fileId) throws IOException {
        // 데이터베이스에서 파일 정보 검색
        AttachedFile attachedFile = attachedFileRepository.findById(fileId)
                .orElseThrow(() -> new FileNotFoundException("File not found with id: " + fileId));

        // 파일이 저장된 경로 (절대 경로 사용)
        Path filePath = Paths.get(attachedFile.getFilePath()).normalize();

        // 파일 존재 여부 확인 및 리소스 설정
        Resource resource = new UrlResource(filePath.toUri());
        if (!resource.exists()) {
            throw new FileNotFoundException("File not found: " + attachedFile.getFileName());
        }

        // 파일명을 UTF-8로 인코딩
        String encodedFileName = UriUtils.encode(attachedFile.getFileName(), "UTF-8");

        // 파일을 다운로드하는 응답 헤더 설정
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + encodedFileName + "\"")
                .body(resource);
    }

    //    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity<Article> registArticle(
//            @RequestPart("articleRequest") String articleRequestJson,
//            @RequestPart("files") List<MultipartFile> files) throws IOException

    @PostMapping(value = "/profile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadProfileImage(@RequestPart("profileImg") MultipartFile file, @RequestParam("memberId") Long memberId) {
        try {
            attachedFileService.saveProfileImage(file, memberId);
            return ResponseEntity.ok("파일이 성공적으로 업로드되었습니다.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("파일 업로드 중 오류가 발생했습니다.");
        }
    }
}
