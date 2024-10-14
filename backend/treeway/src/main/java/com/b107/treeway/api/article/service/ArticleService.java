package com.b107.treeway.api.article.service;

import com.b107.treeway.api.article.dto.ArticleCommentRequest;
import com.b107.treeway.api.article.dto.ArticleCommentResponse;
import com.b107.treeway.api.article.dto.ArticleRequest;
import com.b107.treeway.api.article.dto.ArticleResponse;
import com.b107.treeway.api.article.entity.Article;
import com.b107.treeway.api.article.entity.ArticleComment;
import com.b107.treeway.api.article.entity.ArticleScrap;
import com.b107.treeway.api.article.repository.ArticleCommentRepository;
import com.b107.treeway.api.article.repository.ArticleRepository;
import com.b107.treeway.api.article.repository.ArticleScrapRepository;
import com.b107.treeway.api.attachedfile.dto.AttachedFileResponse;
import com.b107.treeway.api.attachedfile.service.AttachedFileService;
import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import com.b107.treeway.api.rating.entity.IndustryDetail;
import com.b107.treeway.api.rating.entity.Region;
import com.b107.treeway.api.rating.repository.IndustryDetailRepository;
import com.b107.treeway.api.rating.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Autowired
    private ArticleCommentRepository articleCommentRepository;

    @Autowired
    private AttachedFileService attachedFileService;

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
        List<ArticleResponse> articles = articleRepository.findAllArticlesWithDetails();

        // 각 ArticleResponse에 대해 파일 정보를 가져와서 설정
        for (ArticleResponse article : articles) {
            List<AttachedFileResponse> attachedFiles = attachedFileService.getFilesByArticleId(article.getId());
            article.setArticleAttachedFile(attachedFiles);
        }

        return articles;
    }

    @Transactional
    public ArticleResponse getArticleById(Long id) {
        increaseViewCount(id);

        // ArticleResponse를 가져옴
        ArticleResponse article = articleRepository.findArticleByIdWithDetails(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid article ID"));

        // 해당 ArticleResponse에 대한 파일 정보를 가져와서 설정
        List<AttachedFileResponse> attachedFiles = attachedFileService.getFilesByArticleId(article.getId());
        article.setArticleAttachedFile(attachedFiles);

        return article;
    }

    public String scrapArticle(Long articleId, Long memberId) {
        boolean exists = articleScrapRepository.existsByArticleIdAndMemberId(articleId, memberId);
        if (exists) {
            return "이미 스크랩한 게시물입니다.";
        }

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

    public List<ArticleResponse> searchArticles(Long regionId, Long industryDetailId, Long memberId, String title) {
        // 검색된 게시글 목록을 가져옴
        List<ArticleResponse> articles = articleRepository.searchArticles(regionId, industryDetailId, memberId, title);

        // 각 게시글에 대해 첨부파일 리스트를 추가
        articles.forEach(article -> {
            List<AttachedFileResponse> attachedFiles = attachedFileService.getFilesByArticleId(article.getId());
            article.setArticleAttachedFile(attachedFiles);
        });

        return articles;
    }

    public ArticleComment registComment(ArticleCommentRequest request) {
        Article article = articleRepository.findById(request.getArticleId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid article ID"));

        Member member = memberRepository.findById(request.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid member ID"));

        ArticleComment comment = new ArticleComment();
        comment.setArticle(article);
        comment.setMember(member);
        comment.setContent(request.getContent());

        return articleCommentRepository.save(comment);
    }

    public List<ArticleCommentResponse> getCommentsByArticleId(Long articleId) {
        return articleCommentRepository.findCommentsByArticleId(articleId);
    }

    public void deleteComment(Long commentId) {
        if (articleCommentRepository.existsById(commentId)) {
            articleCommentRepository.deleteById(commentId);
        } else {
            throw new IllegalArgumentException("댓글이 존재하지 않습니다.");
        }
    }

    public List<ArticleResponse> getScrappedArticlesByMember(Long memberId) {
        // 스크랩된 게시글 목록을 가져옴
        List<ArticleResponse> articles = articleRepository.findScrappedArticlesByMember(memberId);

        // 각 게시글에 대해 첨부파일 리스트를 추가
        articles.forEach(article -> {
            List<AttachedFileResponse> attachedFiles = attachedFileService.getFilesByArticleId(article.getId());
            article.setArticleAttachedFile(attachedFiles);
        });

        return articles;
    }

    @Transactional
    public void increaseViewCount(Long articleId) {
        articleRepository.incrementViewCount(articleId);
    }

}
