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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
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
    public void registerStorage(StorageRegisterRequestDto request) {
        Optional<UserEntity> user = userRepository.findById(request.getUserId());

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
    }

    public List<StorageListResponseDto> getAllStorages() {
        List<StorageEntity> storageEntities = storageRepository.findAll();
        return storageEntities.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private StorageListResponseDto convertToDto(StorageEntity storageEntity) {
        StorageListResponseDto dto = new StorageListResponseDto();
        dto.setStorageId(storageEntity.getStorageId());
        dto.setStorageName(storageEntity.getStorageName());
        // ... 나머지 필드들도 설정
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
