package com.b107.treeway.api.news.repository;

import com.b107.treeway.api.news.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {

}
