package com.fintech.Server.api.controller;

import com.fintech.Server.api.dto.StorageListResponseDto;
import com.fintech.Server.api.dto.StorageRegisterRequestDto;
import com.fintech.Server.api.entity.StorageEntity;
import com.fintech.Server.api.service.StorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/storage")
public class StorageController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final StorageService storageService;

    @Autowired
    public StorageController(StorageService storageService) {
        this.storageService = storageService;
    }

    // C : 새로운 창고 등록
    @PostMapping("")
    public ResponseEntity registerStorage(@RequestBody StorageRegisterRequestDto request) {
        StorageEntity storageEntity = storageService.registerStorage(request);
        if (storageEntity != null) {
            return ResponseEntity.ok(HttpStatus.CREATED);
        } else {
            return ResponseEntity.badRequest().body("창고 추가 실패");
        }
    }

    // R : 서비스 내 모든 창고 List 출력
    @GetMapping("")
    public ResponseEntity<List<StorageListResponseDto>> getAllStorageList() {
        List<StorageListResponseDto> storages = storageService.getAllStorages();
        return ResponseEntity.ok(storages);
    }

    // R : 창고 Detail
    @GetMapping("/{storageId}")
    public void storageDetail(@PathVariable("storageId") Long storageId) {


    }
    // U : 창고 정보 수정
    // D : 창고 삭제
}

