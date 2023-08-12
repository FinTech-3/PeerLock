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

    // 로그인
    @GetMapping("/login")
    public String login() {
        logger.trace("trace");
        logger.debug("debug");
        logger.info("info");
        logger.warn("warn");
        logger.error("error");

        return "로그인 성공";
    }

    // 회원가입
    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> register(@RequestBody UserRegistrationDto request) {
        UserResponseDto userResponseDto = userService.register(request);
        logger.debug("controller " + userResponseDto);
        return ResponseEntity.ok(userResponseDto);
    }


    // todo: 이거 호스트나 유저를 인증할 수 있는 요소를 만들어야 할 것 같은데? 누가 악의적으로 api 요청하면 어떠카징
    // 게스트 -> 호스트로 전환
    @PatchMapping("/guest/{userId}")
    public ResponseEntity<UserResponseDto> switchHost(@PathVariable("userId") Long userId) {
        UserResponseDto userResponseDto = userService.switchStatus(userId);
        return ResponseEntity.ok(userResponseDto);
    }

    // 호스트 -> 게스트로 전환
    @PatchMapping("/host/{userId}")
    public ResponseEntity<UserResponseDto> switchUser(@PathVariable("userId") Long userId) {
        UserResponseDto userResponseDto = userService.switchStatus(userId);
        return ResponseEntity.ok(userResponseDto);
    }

//    @PostMapping("/kakao/callback")
//    public String kakaoCallback(@RequestParam("code") String code) {
//        return "ss";
//    }


}
