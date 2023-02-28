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

import com.axis.entity.Projects;
import com.axis.service.ProjectsService;

@RestController
@RequestMapping("/projects")
public class ProjectsController {
   
	@Autowired
	ProjectsService projectService;
	
	@PostMapping("/add")
	public ResponseEntity<Projects> addproject(@RequestBody Projects project){
	Projects project1=projectService.addProjects(project);
	return new ResponseEntity<Projects> (project1,HttpStatus.OK);
	  }

	@GetMapping("/getAll")
	public ResponseEntity<List<Projects>> getAll(){
		List<Projects> project1=projectService.getAllProjects();
		return new ResponseEntity<List<Projects>> (project1,HttpStatus.OK);
		
	}
	
	
	@GetMapping("/getproject")
	public ResponseEntity<Projects> getProject(@RequestParam String title){
		Projects project1=projectService.getByProjects(title);
		return new ResponseEntity<Projects> (project1,HttpStatus.OK);
		
	}
	
		
	}
	
	