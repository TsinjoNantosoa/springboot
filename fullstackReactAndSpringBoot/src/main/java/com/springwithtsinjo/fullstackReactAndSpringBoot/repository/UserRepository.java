package com.springwithtsinjo.fullstackReactAndSpringBoot.repository;

import com.springwithtsinjo.fullstackReactAndSpringBoot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
