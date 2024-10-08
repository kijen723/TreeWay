package com.b107.treeway.oauth2.dto;

import lombok.ToString;

import java.util.Map;

@ToString
public class KakaoResponse implements OAuth2Response {

    private final Map<String, Object> attribute;

    public KakaoResponse(Map<String, Object> attribute) {
        System.out.println("1" + attribute);
        System.out.println("2" + attribute.get("kakao_account"));
        this.attribute = (Map<String, Object>) attribute.get("kakao_account");
    }

    @Override
    public String getProvider() {

        return "kakao";
    }

    @Override
    public String getProviderId() {
        return "kakaoProvider";
    }

    @Override
    public String getEmail() {

        return "KakaoEmail";
    }

    @Override
    public String getName() {
        Map profile = (Map) attribute.get("profile");

        return profile.get("nickname").toString();
    }

    public Map<String, String> getProfile(){
        return (Map) attribute.get("profile");
    }
}