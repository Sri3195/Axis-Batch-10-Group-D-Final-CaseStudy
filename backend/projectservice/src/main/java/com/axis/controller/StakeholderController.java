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

import com.axis.entity.Stakeholder;
import com.axis.service.StakeholderService;

@RestController
@RequestMapping("/stakeholders")
public class StakeholderController {
	
	@Autowired
	StakeholderService stakeholderService;
	
	@PostMapping("/add")
	public ResponseEntity<Stakeholder> addStakeholder(@RequestBody Stakeholder stakeholder){
		Stakeholder stakeholder1=stakeholderService.addStakeholder(stakeholder);
		return new ResponseEntity<Stakeholder>(stakeholder1,HttpStatus.OK);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Stakeholder>> getAll(){
		List<Stakeholder> stakeholder1=stakeholderService.getAll();
		return new ResponseEntity<List<Stakeholder>>(stakeholder1,HttpStatus.OK);
	}

	@GetMapping("/getStakeholders")
	public ResponseEntity<List<Stakeholder>> getStakeholders(@RequestParam String project){
		List<Stakeholder> stakeholder1=stakeholderService.getStakeholders(project);
		return new ResponseEntity<List<Stakeholder>>(stakeholder1,HttpStatus.OK);
	}

}
