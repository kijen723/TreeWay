package com.b107.treeway.api.article.service;

import com.b107.treeway.api.article.dto.ArticleDto;
import com.b107.treeway.api.article.dto.ArticleResponse;
import com.b107.treeway.api.article.dto.ArticleScrapRequest;
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

    public Article registArticle(ArticleDto articleDto) {
        Member member = memberRepository.findById(articleDto.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid member ID"));

        IndustryDetail industryDetail = industryDetailRepository.findById(articleDto.getIndustryDetailId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid industry detail ID"));

        Region region = regionRepository.findById(articleDto.getRegionId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid region ID"));

        Article article = new Article();
        article.setMember(member);
        article.setIndustryDetail(industryDetail);
        article.setRegion(region);
        article.setTitle(articleDto.getTitle());
        article.setContent(articleDto.getContent());
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

}
