package com.fintech.Server.api.service;

import com.fintech.Server.api.dto.UserRegistrationDto;
import com.fintech.Server.api.dto.UserResponseDto;

public interface UserService {
    // 회원가입
    UserResponseDto register(UserRegistrationDto registrationDto);
    // 게스트 -> 호스트로 전환
    UserResponseDto switchStatus(Long userId);
    // 호스트 -> 게스트로 전환
    // 호스트 창고 목록 출력 List

}
