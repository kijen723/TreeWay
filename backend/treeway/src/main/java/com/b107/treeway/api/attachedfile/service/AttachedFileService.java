package com.b107.treeway.api.attachedfile.service;

import com.b107.treeway.api.attachedfile.dto.AttachedFileResponse;
import com.b107.treeway.api.attachedfile.entity.AttachedFile;
import com.b107.treeway.api.attachedfile.repository.AttachedFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AttachedFileService {

    @Autowired
    private AttachedFileRepository attachedFileRepository;

    private final String uploadDir = "src/main/resources/attached_file/";

    public AttachedFileService(AttachedFileRepository attachedFileRepository) {
        this.attachedFileRepository = attachedFileRepository;
    }

    public void saveFile(MultipartFile file, Long articleId) throws IOException {
        // 저장 디렉토리 경로 설정
        String directoryPath = "src/main/resources/attacted_file";
        File directory = new File(directoryPath);
        if (!directory.exists()) {
            directory.mkdirs(); // 디렉토리가 없으면 생성
        }

        // 저장할 파일의 전체 경로 생성
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        String filePath = directoryPath + "/" + fileName;

        // 파일 저장
        Path path = Paths.get(filePath);
        Files.write(path, file.getBytes());

        // 파일 정보를 DB에 저장
        AttachedFile attachedFile = new AttachedFile();
        attachedFile.setFileName(fileName);
        attachedFile.setFilePath(filePath);
        attachedFile.setArticleId(articleId);

        attachedFileRepository.save(attachedFile);
    }

    public List<AttachedFileResponse> getFilesByArticleId(Long articleId) {
        return attachedFileRepository.findByArticleId(articleId)
                .stream()
                .map(file -> new AttachedFileResponse(file.getId(), file.getFilePath(), file.getFileName()))
                .collect(Collectors.toList());
    }
}
