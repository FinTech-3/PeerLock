package com.fintech.Server.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserResponseDto {
    private Long id;
    private String username;
    private String email;
    private String phoneNumber;
    private String address;
    private String role;
}
