package com.fintech.Server.api.service;

import com.fintech.Server.api.dto.UserRegistrationDto;
import com.fintech.Server.api.dto.UserResponseDto;

public interface UserService {
    UserResponseDto register(UserRegistrationDto registrationDto);
}
