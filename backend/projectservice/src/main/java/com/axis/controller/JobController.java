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

import com.axis.entity.Jobopportunity;
import com.axis.service.JobService;

@RestController
@RequestMapping("/jobs")
public class JobController {

	@Autowired
	JobService jobService;
	
	@PostMapping("/add")
	public ResponseEntity<Jobopportunity> addJob(@RequestBody Jobopportunity job)
	{
		Jobopportunity job1=jobService.addJob(job);
		return new ResponseEntity<Jobopportunity>(job1,HttpStatus.OK);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Jobopportunity>> getAll()
	{
		List<Jobopportunity> jobs=jobService.getAll();
		return new ResponseEntity<List<Jobopportunity>>(jobs,HttpStatus.OK);
	}
	
	@GetMapping("/getJobs")
	public ResponseEntity<List<Jobopportunity>> getJobs(@RequestParam String project)
	{
		List<Jobopportunity> jobs=jobService.getJobs(project);
		return new ResponseEntity<List<Jobopportunity>>(jobs,HttpStatus.OK);
	}
}
