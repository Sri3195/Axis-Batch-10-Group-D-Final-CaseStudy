package com.axis.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.axis.dto.LoginDto;
import com.axis.entity.Login;
import com.axis.repository.LoginRepository;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	LoginRepository loginRepository;

	@Override
	public LoginDto addEmployee(LoginDto empDto) {
		// TODO Auto-generated method stub
		Login emp=loginRepository.save(convertToEntity(empDto));
		return convertToDto(emp);
	}

	@Override
	public List<LoginDto> getEmployees() {
		// TODO Auto-generated method stub
		List<LoginDto> empDtos=new ArrayList<>();
		List<Login> emps=loginRepository.findAll();
		for(Login emp:emps) {
			empDtos.add(convertToDto(emp));
		}
		return empDtos;
	}

	@Override
	public String findEmployee(String email,String password) {
		// TODO Auto-generated method stub
		String result="Invalid";
		Login emp=loginRepository.findByEmail(email);
		if(ObjectUtils.isEmpty(emp)) {
			result="Invalid";
		}
		else {
			String pwd=emp.getPassword();
			if(pwd.equals(password)) {
				result="Valid";
			}
			
		}
		return result;
	}
	@Override
	public String deleteEmployee(String email) {
		// TODO Auto-generated method stub
		Login login=loginRepository.findByEmail(email);
		loginRepository.delete(login);
		return "User deleted";
	}
	private LoginDto convertToDto(Login emp)
	{
		LoginDto empDto=new ModelMapper().map(emp,LoginDto.class);
		return empDto;
	}
	
	private Login convertToEntity(LoginDto empDto)
	{
		Login emp=new ModelMapper().map(empDto,Login.class);
		return emp;
	}

}
