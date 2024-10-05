package com.b107.treeway.api.news.service;

import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import com.b107.treeway.api.news.dto.NewsResponse;
import com.b107.treeway.api.news.dto.NewsScrapRequest;
import com.b107.treeway.api.news.entity.News;
import com.b107.treeway.api.news.entity.NewsScrap;
import com.b107.treeway.api.news.repository.NewsRepository;
import com.b107.treeway.api.news.repository.NewsScrapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    @Autowired
    private NewsScrapRepository newsScrapRepository;

    @Autowired
    private MemberRepository memberRepository;

    public List<NewsResponse> getAllNews() {
        return newsRepository.findAllNewsWithRegion();
    }

    public String scrapNews(NewsScrapRequest request) {
        if (newsScrapRepository.existsByMemberIdAndNewsId(request.getMemberId(), request.getNewsId())) {
            return "이미 스크랩한 뉴스입니다.";
        }

        News news = newsRepository.findById(request.getNewsId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 뉴스입니다."));
        Member member = memberRepository.findById(request.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));

        NewsScrap newsScrap = new NewsScrap();
        newsScrap.setNews(news);
        newsScrap.setMember(member);

        newsScrapRepository.save(newsScrap);
        return "뉴스 스크랩이 완료되었습니다.";
    }

    public void deleteNewsScrap(Long memberId, Long newsId) {
        NewsScrap newsScrap = newsScrapRepository.findByMemberIdAndNewsId(memberId, newsId)
                .orElseThrow(() -> new IllegalArgumentException("해당 스크랩이 존재하지 않습니다."));
        newsScrapRepository.delete(newsScrap);
    }

    public boolean isNewsScraped(Long memberId, Long newsId) {
        return newsScrapRepository.existsByMemberIdAndNewsId(memberId, newsId);
    }

}
