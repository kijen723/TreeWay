package com.b107.treeway.api.member.service;

import com.b107.treeway.api.analysis.repository.AnalyzeRepository;
import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import com.b107.treeway.api.member.request.AnalyzeRequest;
import com.b107.treeway.api.member.response.AnalyzeResponse;
import com.b107.treeway.api.rating.repository.RatingRepository;
import com.b107.treeway.api.rating.request.SubRatingRequest;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final AnalyzeRepository analyzeRepository;

    public Member findMember(Long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);
        return member.orElse(null);
    }

    public void deleteMember(Long memberId) {
        memberRepository.deleteById(memberId);
    }

    public boolean deleteAnalyze(AnalyzeRequest analyzeRequest) {
        Member member = findMember(analyzeRequest.getMemberId());

        if(member != null) {
            analyzeRepository.deleteAnalyze(analyzeRequest.getMemberId(), analyzeRequest.getAnalysisId());
            return true;
        }else{
            return false;
        }
    }

    public List<AnalyzeResponse> getMemberAnalyze(Long memberId) {
        return memberRepository.findMemberAnalyze(memberId);
    }

    public AnalyzeResponse getMemberAnalyzeDetail(AnalyzeRequest analyzeRequest) {
        return memberRepository.findMemberAnalyzeDetail(analyzeRequest.getMemberId(), analyzeRequest.getAnalysisId());
    }
}
