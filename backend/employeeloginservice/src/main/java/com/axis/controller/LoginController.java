package com.axis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.ObjectUtils;
import org.apache.hc.core5.http.HttpEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axis.dto.EmployeeDto;
import com.axis.dto.LoginDto;
import com.axis.exception.IDNotFoundException;

import com.axis.service.LoginService;


@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	LoginService loginService;
	
	@Autowired
	RestTemplate restTemplate;
	
	@PostMapping("/signup")
	public ResponseEntity<LoginDto> addUser(@RequestBody LoginDto empDto){
	
		LoginDto result=loginService.addEmployee(empDto);
		
      return new  ResponseEntity<LoginDto>(result,HttpStatus.OK);
	}
	
	@GetMapping("/fetch")
	public ResponseEntity<List<LoginDto>> getUsers(){
		List<LoginDto> empDtos=loginService.getEmployees();
		return new ResponseEntity<List<LoginDto>>(empDtos,HttpStatus.OK);
	}
	
	@GetMapping("/search")
	public ResponseEntity<String> getUserByEmail(@RequestParam String email,@RequestParam String password)
	{
		String emp=loginService.findEmployee(email,password);
		return new ResponseEntity<String>(emp,HttpStatus.OK);
	}
	
	@GetMapping("/employee")
	public Object getUser()
	{
		List object1=restTemplate.getForObject("http://EMPLOYEE-SERVICE/employee/fetch", List.class);
		return object1;
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteEmployee(@RequestParam String email)
	{
		String result=loginService.deleteEmployee(email);
		return new ResponseEntity<String>(result,HttpStatus.OK);
	}

}
