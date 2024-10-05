package com.b107.treeway.api.article.service;

import com.b107.treeway.api.article.dto.ArticleDto;
import com.b107.treeway.api.article.entity.Article;
import com.b107.treeway.api.article.repository.ArticleRepository;
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

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public Article getArticleById(Long id) {
        return articleRepository.findById(id).orElse(null);
    }

}
