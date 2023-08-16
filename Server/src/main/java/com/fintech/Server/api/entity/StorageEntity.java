package com.fintech.Server.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fintech.Server.api.entity.user.UserEntity;
import com.fintech.Server.api.entity.user.UserStatus;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "storage")
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 파라미터가 없는 기본 생성자를 생성
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 만듬
@Data
@Builder
public class StorageEntity extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "storage_id")
    private Long storageId;

    @Column(name = "storage_name", length = 50, nullable = false)
    private String storageName;

    @Column(name = "storage_address", length = 100, nullable = false)
    private String storageAddress;

    @Column(name = "storage_latitude", length = 100, nullable = false)
    private String storageLatitude;

    @Column(name = "storage_longitude", length = 100, nullable = false)
    private String storageLongitude;

    @Column(name = "storage_total_capacity", length = 50, nullable = false)
    private String storageTotalCapacity;

    @Column(name = "storage_available_capacity", length = 255)
    private String storageAvailableCapacity;

    @Column(name = "storage_usage", length = 255)
    private String storageUsage;

    @Column(name = "storage_price", nullable = false)
    private Integer storagePrice;

//    @Column(name = "storage_wishes", nullable = false)
//    private Integer storageWishes;

    @Column(name = "service_commission", nullable = false)
    private Integer serviceCommission;

    @Column(name = "storage_description", columnDefinition = "TEXT", nullable = false)
    private String storageDescription;

    // todo: Date 로 하는게 맞을까?
    @Column(name = "available_from", nullable = false)
    private Date availableFrom;

    @Column(name = "available_until", nullable = false)
    private Date availableUntil;

    @Column(name = "return_policy", columnDefinition = "TEXT", nullable = false)
    private String returnPolicy;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20)
    private StorageStatus status; // Available

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @OneToMany(mappedBy = "storage", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StorageImageEntity> storageImages;

//    @Column(name = "storage_types_id", nullable = false)
//    private Integer storageTypesId;
//
//    @Column(name = "location_id", nullable = false)
//    private Integer locationId;
}
