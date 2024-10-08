package com.b107.treeway.oauth2.service;

import com.b107.treeway.api.member.entity.Member;
import com.b107.treeway.db.repository.UserRepository;
import com.b107.treeway.oauth2.dto.*;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    public CustomOAuth2UserService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        OAuth2User oAuth2User = super.loadUser(userRequest);
        System.out.println("oAuth2User = " + oAuth2User);

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        System.out.println("registrationId = " + registrationId);
        OAuth2Response oAuth2Response;
        Map<String, String> profile = Map.of();
        if (registrationId.equals("kakao")) {
            System.out.println("카카오 로그인 요청");
            profile = new KakaoResponse(oAuth2User.getAttributes()).getProfile();
            oAuth2Response = new KakaoResponse(oAuth2User.getAttributes());

            System.out.println("profile = " + profile);
            System.out.println("oAuth2Response = " + oAuth2Response);
        }
        else if (registrationId.equals("google")) {

            oAuth2Response = new GoogleResponse(oAuth2User.getAttributes());
            System.out.println("google oAuth2Response = " + oAuth2Response);
        }
        else {
            return null;
        }

        String provider, providerId, name;

        if(registrationId.equals("kakao")){
            provider = "kakao";
            providerId = oAuth2User.getName();
            name = profile.get("nickname");
        }else {
            provider = oAuth2Response.getProvider();
            providerId = oAuth2Response.getProviderId();
            name = oAuth2Response.getName();
        }

        String memberName = name;
        Member existData = userRepository.findByMemberName(memberName);

        if (existData == null) {

            Member member = new Member();
            member.setMemberName(memberName);
            member.setEmail(oAuth2Response.getEmail());
            member.setName(name);
            member.setRole("ROLE_USER");

            userRepository.save(member);

            UserDTO userDTO = new UserDTO();
            userDTO.setUsername(memberName);
            userDTO.setName(name);
            userDTO.setRole("ROLE_USER");

            System.out.println(userDTO);

            return new CustomOAuth2User(userDTO);
        }
        else {

            existData.setEmail(oAuth2Response.getEmail());
            existData.setName(name);

            userRepository.save(existData);

            UserDTO userDTO = new UserDTO();
            userDTO.setUsername(existData.getMemberName());
            userDTO.setName(name);
            userDTO.setRole(existData.getRole());

            return new CustomOAuth2User(userDTO);
        }
    }
}