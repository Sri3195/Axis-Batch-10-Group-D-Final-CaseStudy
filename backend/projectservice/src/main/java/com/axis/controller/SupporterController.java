package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Supporter;
import com.axis.service.SupporterService;

@RestController
@RequestMapping("/supporters")
public class SupporterController {

	@Autowired
	SupporterService supporterService;
	
	@PostMapping("/add")
	public ResponseEntity<Supporter> addSupporter(@RequestBody Supporter supporter)
	{
		Supporter supporter1=supporterService.addSupporter(supporter);
		return new  ResponseEntity<Supporter>(supporter1,HttpStatus.OK);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Supporter>> getAll()
	{
		List<Supporter> supporters=supporterService.getAll();
		return new  ResponseEntity<List<Supporter>>(supporters,HttpStatus.OK);
	}
	
	@GetMapping("/getSupporters")
	public ResponseEntity<List<Supporter>> getSupporters(@RequestParam String project)
	{
		List<Supporter> supporters=supporterService.getSupporters(project);
		return new  ResponseEntity<List<Supporter>>(supporters,HttpStatus.OK);
	}
	
	
}
