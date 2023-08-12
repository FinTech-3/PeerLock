package com.fintech.Server.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fintech.Server.api.dto.StorageListResponseDto;
import com.fintech.Server.api.dto.StorageRegisterRequestDto;
import com.fintech.Server.api.entity.StorageEntity;
import com.fintech.Server.api.entity.user.UserEntity;
import com.fintech.Server.api.repository.StorageRepository;
import com.fintech.Server.api.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class StorageServiceImpl implements StorageService {
    private static final Logger logger = LoggerFactory.getLogger(StorageServiceImpl.class);
    private final StorageRepository storageRepository;
    private final UserRepository userRepository;

    public StorageServiceImpl(
            @Autowired StorageRepository storageRepository,
            @Autowired UserRepository userRepository
    ) {
        this.storageRepository = storageRepository;
        this.userRepository = userRepository;
    }


    @Override
    public StorageEntity registerStorage(StorageRegisterRequestDto request) {
        Optional<UserEntity> user = userRepository.findById(request.getUserId());
        // todo: user.Status = HOST 일 때 수행하도록
        if (user.get().getStatus().name().equals("HOST")) {
            StorageEntity storageEntity = StorageEntity.builder()
                    .user(user.get())
                    .storageName(request.getStorageName())
                    .storageAddress(request.getStorageAddress())
                    .storageLatitude(request.getStorageLatitude())
                    .storageLongitude(request.getStorageLongitude())
                    .storageTotalCapacity(request.getStorageTotalCapacity())
                    .storageAvailableCapacity(request.getStorageAvailableCapacity())
                    .storageUsage(request.getStorageUsage())
                    .storagePrice(request.getStoragePrice())
                    .serviceCommission(request.getServiceCommission())
                    .storageDescription(request.getStorageDescription())
                    .availableFrom(request.getAvailableFrom())
                    .availableUntil(request.getAvailableUntil())
                    .returnPolicy(request.getReturnPolicy())
                    .build();

            StorageEntity savedStorage = storageRepository.save(storageEntity);

            return savedStorage;
        } else {
            return null;
        }
    }

    public List<StorageListResponseDto> getAllStorages() {
        List<StorageEntity> storageEntities = storageRepository.findAll();
        List<StorageListResponseDto> storageDtos = new ArrayList<>();

        for (StorageEntity storageEntity : storageEntities) {
            StorageListResponseDto dto = convertToDto(storageEntity);
            storageDtos.add(dto);
        }

        return storageDtos;
    }

    private StorageListResponseDto convertToDto(StorageEntity storageEntity) {
        StorageListResponseDto dto = new StorageListResponseDto();

        // dto 에 값 입력
        dto.setStorageId(storageEntity.getStorageId());
        dto.setStorageName(storageEntity.getStorageName());
        dto.setStorageAddress(storageEntity.getStorageAddress());
        // todo: 주소를 통해 위도, 경도 찾기 -> 프론트에서? 백에서? naver 지도 api에 따라 다를듯
        dto.setStorageLatitude(storageEntity.getStorageLatitude());
        dto.setStorageLongitude(storageEntity.getStorageLongitude());
        dto.setStorageTotalCapacity(storageEntity.getStorageTotalCapacity());
        dto.setStorageAvailableCapacity(storageEntity.getStorageAvailableCapacity());
        dto.setStorageUsage(storageEntity.getStorageUsage());
        dto.setStoragePrice(storageEntity.getStoragePrice());
        dto.setServiceCommission(storageEntity.getServiceCommission());
        dto.setStorageDescription(storageEntity.getStorageDescription());
        dto.setAvailableFrom(storageEntity.getAvailableFrom());
        dto.setAvailableUntil(storageEntity.getAvailableUntil());
        dto.setReturnPolicy(storageEntity.getReturnPolicy());

        return dto;
    }

//    @Override
//    public List<StorageEntity> getAllStorages() {
//        List<StorageEntity> storageEntityList = storageRepository.findAll();
//        logger.debug("Service : StorageEntityList: " + storageEntityList);
//        return null;
//    }
}
//        Map<String, Object> resultMap = new HashMap<>();
//        resultMap.put("storages", storages);
//
//        ObjectMapper objectMapper = new ObjectMapper();
//        String result = objectMapper.writeValueAsString(resultMap);
