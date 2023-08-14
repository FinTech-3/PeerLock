package com.fintech.Server.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserInfoResponseDto {
    private Long userId;
    private String username;
    private int sex;
    private String email;
    private Date birth;
    private String phoneNumber;
    private String status;
}