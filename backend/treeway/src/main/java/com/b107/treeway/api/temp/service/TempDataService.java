package com.b107.treeway.api.temp.service;

import com.b107.treeway.api.temp.entity.TempData;
import com.b107.treeway.api.temp.repository.TempDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TempDataService {
    @Autowired
    private TempDataRepository tempDataRepository;

    // 모든 데이터를 조회하는 메서드
    public List<TempData> getAllData() {
        return tempDataRepository.findAll();
    }

    public Optional<TempData> getTempDataById(Long id) {
        return tempDataRepository.findById(id);
    }
}
