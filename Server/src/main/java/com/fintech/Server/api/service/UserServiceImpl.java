package com.fintech.Server.api.service;

import com.fintech.Server.api.entity.user.UserEntity;
import com.fintech.Server.api.entity.user.UserRole;
import com.fintech.Server.api.dto.UserRegistrationDto;
import com.fintech.Server.api.dto.UserResponseDto;
import com.fintech.Server.api.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserResponseDto register(UserRegistrationDto request) {
        UserRole userRole = UserRole.valueOf(request.getStatus().toUpperCase());

        logger.debug("service " +  request);

        UserEntity userEntity = UserEntity.builder()
                .userName(request.getUsername())
                .userPassword(request.getPassword())
                .userSex(request.getSex())
                .userEmail(request.getEmail())
                .userBirth(request.getBirth())
                .userPhoneNumber(request.getPhoneNumber())
                .status(userRole)
                .build();

        UserEntity savedUser = userRepository.save(userEntity);

        return new UserResponseDto(
                savedUser.getUserId(),
                savedUser.getUserName(),
                savedUser.getStatus().name()
        );
    }

}
