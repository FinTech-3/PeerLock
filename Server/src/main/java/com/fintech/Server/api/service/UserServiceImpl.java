package com.fintech.Server.api.service;

import com.fintech.Server.api.dto.*;
import com.fintech.Server.api.entity.StorageEntity;
import com.fintech.Server.api.entity.user.UserEntity;
import com.fintech.Server.api.entity.user.UserStatus;
import com.fintech.Server.api.repository.StorageRepository;
import com.fintech.Server.api.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository userRepository;
    private final StorageRepository storageRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, StorageRepository storageRepository) {
        this.userRepository = userRepository;
        this.storageRepository = storageRepository;
    }

    @Override
    public UserResponseDto register(UserRegistrationDto request) {
        // todo: 회원가입 중복처리하기
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
    public UserInfoResponseDto login(UserLoginRequestDto request) {
        UserEntity user = userRepository.findUserEntityByUserEmail(request.getEmail());
        logger.debug("User: " + user);
        if (user.getUserEmail().equals(request.getEmail()) && user.getUserPassword().equals(request.getPassword())) {
            logger.debug("회원가입 된 유저");

            UserInfoResponseDto dto = new UserInfoResponseDto();
            dto.setUserId(user.getUserId());
            dto.setUserName(user.getUserName());
            dto.setUserSex(user.getUserSex());
            dto.setUserEmail(user.getUserEmail());
            dto.setUserBirth(user.getUserBirth());
            dto.setUserPhoneNumber(user.getUserPhoneNumber());
            dto.setStatus(user.getStatus().name());


            //dto.setStorage(user.geStorage());


            return dto;
        }

        return null;
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

        // 해당 userId를 가진 UserEntity가 없을 경우 null 반환
        logger.debug("UserService SwitchStatus : 유저 없음");
        return null;
    }


    // 유저 정보 가져오기
    @Override
    public ResponseEntity<UserInfoResponseDto> getUserDetail(Long userId) {
        logger.debug("service : " + userId);
        Optional<UserEntity> userOpt = userRepository.findById(userId);

        if(!userOpt.isPresent()) {
            logger.debug(userOpt.toString());
            return ResponseEntity.notFound().build();
        }

        UserEntity userEntity = userOpt.get();
        UserInfoResponseDto userInfoResponseDto = convertToDto(userEntity);

        return ResponseEntity.ok(userInfoResponseDto);
    }

    // 전체 유저 정보 가져오기
    @Override
    public List<UserInfoResponseDto> getAllUsers() {

        List<UserEntity> userEntities = userRepository.findAll();
        List<UserInfoResponseDto> userDtos = new ArrayList<>();

        for(UserEntity userEntity : userEntities) {
            UserInfoResponseDto dto = convertToDto(userEntity);
            userDtos.add(dto);
        }

        return userDtos;
    }


    private UserInfoResponseDto convertToDto(UserEntity userEntity) {

        // dto에 값 입력
        // user
        UserInfoResponseDto dto = new UserInfoResponseDto();

        dto.setUserId(userEntity.getUserId());
        dto.setUserName(userEntity.getUserName());
        dto.setUserSex(userEntity.getUserSex());
        dto.setUserEmail(userEntity.getUserEmail());
        dto.setUserBirth(userEntity.getUserBirth());
        dto.setUserPhoneNumber(userEntity.getUserPhoneNumber());
        dto.setStatus(userEntity.getStatus().name());

        // storage
        List<StorageListResponseDto> storageDtos = new ArrayList<>();

        for (StorageEntity storageEntity : userEntity.getStorages()) {

            StorageListResponseDto storageDto = new StorageListResponseDto();

            storageDto.setStorageId(storageEntity.getStorageId());
            storageDto.setStorageName(storageEntity.getStorageName());
            storageDto.setStorageAddress(storageEntity.getStorageAddress());

            storageDto.setStorageLatitude(storageEntity.getStorageLatitude());
            storageDto.setStorageLongitude(storageEntity.getStorageLongitude());
            storageDto.setStorageTotalCapacity(storageEntity.getStorageTotalCapacity());
            storageDto.setStorageAvailableCapacity(storageEntity.getStorageAvailableCapacity());
            storageDto.setStorageUsage(storageEntity.getStorageUsage());
            storageDto.setStoragePrice(storageEntity.getStoragePrice());
            storageDto.setServiceCommission(storageEntity.getServiceCommission());
            storageDto.setStorageDescription(storageEntity.getStorageDescription());
            storageDto.setAvailableFrom(storageEntity.getAvailableFrom());
            storageDto.setAvailableUntil(storageEntity.getAvailableUntil());
            storageDto.setReturnPolicy(storageEntity.getReturnPolicy());
            storageDto.setCreatedAt(storageEntity.getCreatedAt());
            storageDto.setUpdatedAt(storageEntity.getUpdatedAt());
            storageDto.setStatus(storageEntity.getStatus().name());

             storageDtos.add(storageDto);
        }

        dto.setStorages(storageDtos);

        return dto;
    }



    @Override
    public UserDeleteResponseDto deleteUser(Long userId) {

        Optional<UserEntity> byUser = userRepository.findById(userId);

        if (byUser.isPresent()) {
            UserEntity user = byUser.get();

            // User를 DB에서 완전 삭제는 진행하지 않고, Status만 WITHDRAWAL로 바꿔서 Soft 삭제를 구현하기
            // return값으로는 삭제된 유저의 정보와 status:"WITHDRAWAL"이 출력될 수 있도록 하기

//            logger.debug("status: " + user);
//            logger.debug("삭제된 정보");

            // status 정하기
            user.setStatus(UserStatus.WITHDRAWAL);
            // 저장
            UserEntity savedUser = userRepository.save(user);
            // controller에 보내주기
            return new UserDeleteResponseDto(
                    user.getUserId(),
                    user.getUserName(),
                    user.getUserPassword(),
                    user.getUserSex(),
                    user.getUserEmail(),
                    user.getUserBirth(),
                    user.getUserPhoneNumber(),
                    user.getStatus().name()
            );

        } return null;
    }


}
