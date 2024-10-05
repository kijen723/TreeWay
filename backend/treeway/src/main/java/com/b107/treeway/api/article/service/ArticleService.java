package com.b107.treeway.api.article.service;

import com.b107.treeway.api.article.dto.ArticleRequest;
import com.b107.treeway.api.article.dto.ArticleResponse;
import com.b107.treeway.api.article.entity.Article;
import com.b107.treeway.api.article.entity.ArticleScrap;
import com.b107.treeway.api.article.repository.ArticleRepository;
import com.b107.treeway.api.article.repository.ArticleScrapRepository;
import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import com.b107.treeway.api.rating.entity.IndustryDetail;
import com.b107.treeway.api.rating.entity.Region;
import com.b107.treeway.api.rating.repository.IndustryDetailRepository;
import com.b107.treeway.api.rating.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private ArticleScrapRepository articleScrapRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private IndustryDetailRepository industryDetailRepository;

    @Autowired
    private RegionRepository regionRepository;

    public Article registArticle(ArticleRequest articleRequest) {
        Member member = memberRepository.findById(articleRequest.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid member ID"));

        IndustryDetail industryDetail = industryDetailRepository.findById(articleRequest.getIndustryDetailId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid industry detail ID"));

        Region region = regionRepository.findById(articleRequest.getRegionId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid region ID"));

        Article article = new Article();
        article.setMember(member);
        article.setIndustryDetail(industryDetail);
        article.setRegion(region);
        article.setTitle(articleRequest.getTitle());
        article.setContent(articleRequest.getContent());
        article.setViewCount(0);

        return articleRepository.save(article);
    }

    public List<ArticleResponse> getAllArticles() {
        return articleRepository.findAllArticlesWithDetails();
    }

    public ArticleResponse getArticleById(Long id) {
        return articleRepository.findArticleByIdWithDetails(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid article ID"));
    }

    public String scrapArticle(Long articleId, Long memberId) {
        // 스크랩 중복 여부 체크
        boolean exists = articleScrapRepository.existsByArticleIdAndMemberId(articleId, memberId);
        if (exists) {
            return "이미 스크랩한 게시물입니다.";
        }

        // 새로운 스크랩 저장
        ArticleScrap articleScrap = new ArticleScrap();
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid article ID"));

        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid member ID"));

        articleScrap.setArticle(article);
        articleScrap.setMember(member);

        articleScrapRepository.save(articleScrap);
        return "스크랩 성공!";
    }

    public boolean checkIfScraped(Long memberId, Long articleId) {
        return articleScrapRepository.existsByArticleIdAndMemberId(articleId, memberId);
    }

    public void deleteScrap(Long articleId, Long memberId) {
        ArticleScrap articleScrap = articleScrapRepository.findByArticleIdAndMemberId(articleId, memberId)
                .orElseThrow(() -> new IllegalArgumentException("해당 스크랩을 찾을 수 없습니다."));

        articleScrapRepository.delete(articleScrap);
    }

    public void deleteArticle(Long articleId) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid article ID"));

        articleRepository.delete(article);
    }

    public Article updateArticle(Long articleId, ArticleRequest articleRequest) {
        Article article = articleRepository.findById(articleId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid article ID"));

        Member member = memberRepository.findById(articleRequest.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid member ID"));

        if (!article.getMember().getId().equals(articleRequest.getMemberId())) {
            throw new IllegalArgumentException("You are not authorized to update this article.");
        }

        IndustryDetail industryDetail = industryDetailRepository.findById(articleRequest.getIndustryDetailId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid industry detail ID"));

        Region region = regionRepository.findById(articleRequest.getRegionId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid region ID"));

        article.setTitle(articleRequest.getTitle());
        article.setContent(articleRequest.getContent());
        article.setIndustryDetail(industryDetail);
        article.setRegion(region);

        return articleRepository.save(article);
    }

    public List<ArticleResponse> searchArticles(Long regionId, Long industryDetailId, String title) {
        // 해당 조건에 맞는 기사 리스트를 검색
        return articleRepository.searchArticles(regionId, industryDetailId, title);
    }

}
