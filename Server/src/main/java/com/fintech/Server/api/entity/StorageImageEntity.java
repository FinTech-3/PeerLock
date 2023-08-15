package com.fintech.Server.api.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "storage_images")
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 파라미터가 없는 기본 생성자를 생성
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 만듬
@Data
@Builder
public class StorageImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long imageId;

    @Column(name = "image_name")
    private String imageName;

    @Column(name = "image_path", length = 300)
    private String imagePath;

    @ManyToOne
    @JoinColumn(name = "storage_id", referencedColumnName = "storage_id")
    private StorageEntity storage;


}
