package com.fintech.Server.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class StorageListResponseDto {
    private Long storageId;
    private String storageName;
    private String storageAddress;
    private String storageLatitude;
    private String storageLongitude;
    private String storageTotalCapacity;
    private String storageAvailableCapacity;
    private String storageUsage;
    private Integer storagePrice;
    private Integer serviceCommission;
    private String storageDescription;
    private Date availableFrom;
    private Date availableUntil;
    private String returnPolicy;
    private Instant createdAt;
    private Instant updatedAt;

}
