package com.axis.service;

import java.util.List;

import com.axis.dto.EmployeeDto;

public interface EmployeeService {
	
	public EmployeeDto addEmployee(EmployeeDto empDto);
	public List<EmployeeDto> getAllEmployees();
	public EmployeeDto findEmployee(String email);
	public String deleteEmployee(String email);
}
