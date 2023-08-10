package com.fintech.Server.api.controller;

import com.fintech.Server.api.dto.UserRegistrationDto;
import com.fintech.Server.api.dto.UserResponseDto;
import com.fintech.Server.api.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @RestController는 @Controller에 @ResponseBody가 추가된 것
 * @Controller와 다르게 REST 형식의 Controller 형태로 지원
 * Rest 형식이란 -> Json 형태로 객체 데이터를 반환하는 것 -> 반환되는 객체는 Json으로 Serialize되어 사용자에게 반환
 * @ResponseBody 어노테이션 생략 가능
 */
//@Controller
@RestController
@RequestMapping("/api/user")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public String login() {
        logger.trace("trace");
        logger.debug("debug");
        logger.info("info");
        logger.warn("warn");
        logger.error("error");

        return "로그인 성공";
    }
    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> register(@RequestBody UserRegistrationDto request) {
        UserResponseDto userResponseDto = userService.register(request);
        return ResponseEntity.ok(userResponseDto);
    }

    @PostMapping("/kakao/callback")
    public String kakaoCallback(@RequestParam("code") String code) {

        return "ss";
    }


}
