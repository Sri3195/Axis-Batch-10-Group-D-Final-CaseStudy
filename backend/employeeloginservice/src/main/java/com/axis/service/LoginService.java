package com.axis.service;

import java.util.List;

import com.axis.dto.LoginDto;

public interface LoginService {
	public LoginDto addEmployee(LoginDto empDto);
	public List<LoginDto> getEmployees();
	public String findEmployee(String email,String password);
	public String deleteEmployee(String email);
}
