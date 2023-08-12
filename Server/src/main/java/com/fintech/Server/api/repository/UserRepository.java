package com.fintech.Server.api.repository;


import com.fintech.Server.api.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findUserEntityByUserEmail(String email);
}