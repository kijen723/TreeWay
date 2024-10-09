package com.b107.treeway.api.member.service;

import com.b107.treeway.api.analysis.entity.AnalysisResume;
import com.b107.treeway.api.analysis.repository.AnalyzeRepository;
import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.api.member.repository.MemberRepository;
import com.b107.treeway.api.member.request.AnalyzeRequest;
import com.b107.treeway.api.member.request.MemberInfoRequest;
import com.b107.treeway.api.member.response.AnalyzeResponse;
import com.b107.treeway.api.rating.repository.RatingRepository;
import com.b107.treeway.api.rating.request.SubRatingRequest;
import com.b107.treeway.api.rating.response.IndustryRatingResponse;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    @Transactional
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
        List<AnalysisResume> byMemberId = analyzeRepository.findByMemberId(memberId);
        return byMemberId.stream()
                .map(AnalyzeResponse::convertToAnalyzeResponse)
                .collect(Collectors.toList());
    }

    public AnalyzeResponse getMemberAnalyzeDetail(AnalyzeRequest analyzeRequest) {
        AnalysisResume memberAnalyzeDetail = analyzeRepository.findMemberAnalyzeDetail(analyzeRequest.getMemberId(), analyzeRequest.getAnalysisId());
        if(memberAnalyzeDetail == null) {
            return null;
        }else{
            return AnalyzeResponse.convertToAnalyzeResponse(memberAnalyzeDetail);
        }
    }

    public boolean signUpInfo(MemberInfoRequest memberInfoRequest, HttpServletResponse response) {
        Member member = findMember(memberInfoRequest.getMemberId());
        if(member != null) {
            String birthDateString = memberInfoRequest.getBirthDate();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate birthDate;

            birthDate = LocalDate.parse(birthDateString, formatter);
            LocalDate currentDate = LocalDate.now();

            int age = Period.between(birthDate, currentDate).getYears();

            member.setAge(age);
            member.setPhoneNumber(memberInfoRequest.getPhoneNumber());
            memberRepository.save(member);

            Cookie userCookie = new Cookie("customUserDetails", null);
            userCookie.setMaxAge(0);
            userCookie.setPath("/");
            response.addCookie(userCookie);
            return true;
        }else{
            return false;
        }

    }
}
