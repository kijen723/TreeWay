package com.b107.treeway.api.temp.controller;


import com.b107.treeway.api.temp.entity.TempData;
import com.b107.treeway.api.temp.service.TempDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/temp")
public class TempDataController {
    @Autowired
    private TempDataService tempDataService;

    // GET 요청으로 모든 데이터를 반환
    @GetMapping
    public List<TempData> getAllTempData() {
        List<TempData> dataList = tempDataService.getAllData();
        System.out.println("데이터 목록: " + dataList); // 데이터 출력
        return dataList;
    }

    @GetMapping("/{id}")
    public ResponseEntity<TempData> getTempDataById(@PathVariable Long id) {
        Optional<TempData> tempData = tempDataService.getTempDataById(id);
        return tempData.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
