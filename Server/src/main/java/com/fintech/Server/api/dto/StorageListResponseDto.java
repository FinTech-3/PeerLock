package com.fintech.Server.api.dto;

import com.fintech.Server.api.entity.user.UserEntity;
import lombok.*;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class StorageListResponseDto {

    // private UserResponseDto user;
    private Long userId;
    private Long storageId;
    private String storageName;
    private String storageAddress;
    private String storageLatitude;
    private String storageLongitude;
    private String storageType;
    private String storageSize;
    private String storageFeature;
//    private String storageTotalCapacity;
//    private String storageAvailableCapacity;
//    private String storageUsage;
    private Integer storagePrice;
    private Integer serviceCommission;
    private String storageDescription;
//    private Date availableFrom;
//    private Date availableUntil;
    private String returnPolicy;
    private Instant createdAt;
    private Instant updatedAt;
    private String status;
    private List<StorageImageResponseDto> images;

}
