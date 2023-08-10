package com.fintech.Server.api.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserRegistrationDto {
    private String username;
    private String password;
    private String email;
    private String phoneNumber;
    private String address;
    private String role;
}
