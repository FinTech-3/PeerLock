package com.fintech.Server.api.entity.user;

import com.fintech.Server.api.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "User")
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 파라미터가 없는 기본 생성자를 생성
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 만듬
@Data
@Builder
public class UserEntity extends BaseEntity {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "username", length = 20)
    private String username;

    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "email", length = 45)
    private String email;

    @Column(name = "phone_number", length = 20)
    private String phoneNumber;

    @Column(name = "address", length = 255)
    private String address;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", length = 20)
    private UserRole role;

//    @Enumerated(EnumType.STRING)
//    @Column(name = "oauth_provider", length = 10)
//    private OAuthProvider oAuthProvider;

    // created_at과 updated_at 필드는 BaseEntity에서 정의되어 있음
}
