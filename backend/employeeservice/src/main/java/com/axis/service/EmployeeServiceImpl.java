package com.axis.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.ObjectUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.EmployeeDto;
import com.axis.entity.Employee;
import com.axis.exception.IDNotFoundException;
import com.axis.repository.EmployeeRepository;
import com.axis.utils.AppConstants;

@Service
public class EmployeeServiceImpl  implements EmployeeService{
	
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public EmployeeDto findEmployee(String email) {
		// TODO Auto-generated method stub
		Employee emp=employeeRepository.findByEmail(email);
		if(ObjectUtils.isEmpty(emp))
		{
			throw new IDNotFoundException(AppConstants.EMPLOYEE_ID_NOT_FOUND);
		}
		else {
			return convertToDto(emp);
		}
	}

	

	@Override
	public EmployeeDto addEmployee(EmployeeDto empDto) {
		// TODO Auto-generated method stub
		Employee emp=employeeRepository.save(convertToEntity(empDto));
		return convertToDto(emp);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		// TODO Auto-generated method stub
		List<EmployeeDto> empDtos=new ArrayList<>();
		List<Employee> emps=employeeRepository.findAll();
		for(Employee emp:emps) {
			empDtos.add(convertToDto(emp));
		}
		return empDtos;
	}
	@Override
	public String deleteEmployee(String email) {
		// TODO Auto-generated method stub
		Employee emp=employeeRepository.findByEmail(email);
		 employeeRepository.delete(emp);
		 return "Employee deleted";
	}
	
	private EmployeeDto convertToDto(Employee emp)
	{
		EmployeeDto empDto=new ModelMapper().map(emp,EmployeeDto.class);
		return empDto;
	}
	
	private Employee convertToEntity(EmployeeDto empDto)
	{
		Employee emp=new ModelMapper().map(empDto,Employee.class);
		return emp;
	}

	
}
