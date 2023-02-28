package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.dto.LoginDto;
import com.axis.entity.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer>{
	Login findByEmail(String email);
}
