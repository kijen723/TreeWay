package com.b107.treeway.api.news.service;

import com.b107.treeway.api.news.dto.NewsResponse;
import com.b107.treeway.api.news.entity.News;
import com.b107.treeway.api.news.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public List<NewsResponse> getAllNews() {
        return newsRepository.findAllNewsWithRegion();
    }

}
