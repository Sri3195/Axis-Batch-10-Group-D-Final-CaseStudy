package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Jobopportunity;
import com.axis.repository.JobRepository;

@Service
public class JobServiceImpl implements JobService{
	
	@Autowired
	JobRepository jobRepository;

	@Override
	public Jobopportunity addJob(Jobopportunity job) {
		// TODO Auto-generated method stub
		return jobRepository.save(job);
	}

	@Override
	public List<Jobopportunity> getAll() {
		// TODO Auto-generated method stub
		List<Jobopportunity> jobs= jobRepository.findAll();
		return jobs;
	}

	@Override
	public List<Jobopportunity> getJobs(String project) {
		// TODO Auto-generated method stub
		List<Jobopportunity> jobs= jobRepository.findByProject(project);
		return jobs;
	}

	@Override
	public String deleteJob(String title) {
		// TODO Auto-generated method stub
		Jobopportunity job=jobRepository.findByTitle(title);
		jobRepository.delete(job);
		return "Job deleted";
	}
	
	
	

}
