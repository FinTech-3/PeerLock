package com.fintech.Server.api.entity.user;

import com.fintech.Server.api.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "User")
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 파라미터가 없는 기본 생성자를 생성
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 만듬
@Data
@Builder
public class UserEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "user_name", length = 20)
    private String userName;

    @Column(name = "user_password", length = 200)
    private String userPassword;

    @Column(name = "user_sex")
    private int userSex; // 0: MAN, 1: WOMAN

    @Column(name = "user_email", length = 50)
    private String userEmail;

    @Column(name = "user_birth")
    private Date userBirth;

    @Column(name = "user_phone_number")
    private String userPhoneNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20)
    private UserRole status; // host, user, withdrawal, admin


    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private UserProfileEntity userProfile;


    // created_at과 updated_at 필드는 BaseEntity에서 정의되어 있음

//    @Enumerated(EnumType.STRING)
//    @Column(name = "oauth_provider", length = 10)
//    private OAuthProvider oAuthProvider;
}
