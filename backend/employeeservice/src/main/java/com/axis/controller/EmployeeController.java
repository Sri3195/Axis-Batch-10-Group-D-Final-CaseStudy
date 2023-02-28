package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.EmployeeDto;
import com.axis.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/add")
	public ResponseEntity<EmployeeDto> addEmp(@RequestBody EmployeeDto emp)
	{
		EmployeeDto empDto=employeeService.addEmployee(emp);
		return new ResponseEntity<EmployeeDto>(empDto,HttpStatus.OK);
	}
	
	@GetMapping("/fetch")
	public ResponseEntity<List<EmployeeDto>> getAll()
	{
		List<EmployeeDto> empdtos=employeeService.getAllEmployees();
		return new ResponseEntity<List<EmployeeDto>>(empdtos,HttpStatus.OK);
	}
	
	@GetMapping("/search")
	public ResponseEntity<EmployeeDto> getEmployee(@RequestParam String email)
	{
		EmployeeDto empdto=employeeService.findEmployee(email);
		return new ResponseEntity<EmployeeDto>(empdto,HttpStatus.OK);
	}
	
	@GetMapping("/hello")
	public ResponseEntity<String > sayHello(){
		return new ResponseEntity<String>("Hello Employee!",HttpStatus.OK);
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteEmployee(@RequestParam String email)
	{
		String result=employeeService.deleteEmployee(email);
		return new ResponseEntity<String>(result,HttpStatus.OK);
	}
}
