package com.fintech.Server.api.service;

import com.fintech.Server.api.entity.user.UserEntity;
import com.fintech.Server.api.entity.user.UserStatus;
import com.fintech.Server.api.dto.UserRegistrationDto;
import com.fintech.Server.api.dto.UserResponseDto;
import com.fintech.Server.api.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserResponseDto register(UserRegistrationDto request) {
        UserStatus userRole = UserStatus.valueOf(request.getStatus().toUpperCase());

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

    @Override
    public UserResponseDto switchStatus(Long userId) {
        Optional<UserEntity> byId = userRepository.findById(userId);
        if (byId.isPresent()) {
            UserEntity user = byId.get();

            if ("HOST".equals(user.getStatus())) {
                user.setStatus(UserStatus.USER);
            } else if ("USER".equals(user.getStatus())) {
                user.setStatus(UserStatus.HOST);
            }

            UserEntity savedUser = userRepository.save(user);

            return new UserResponseDto(
                    savedUser.getUserId(),
                    savedUser.getUserName(),
                    savedUser.getStatus().name()
            );
        }

        logger.debug("UserService SwitchStatus : 유저 없음");
        // 해당 userId를 가진 UserEntity가 없을 경우 null 반환
        return null;
    }


}
