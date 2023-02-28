package com.axis.service;

import java.util.List;

import com.axis.entity.Jobopportunity;

public interface JobService {
	
	public Jobopportunity addJob(Jobopportunity job);
	public List<Jobopportunity> getAll();
	public List<Jobopportunity> getJobs(String project);
	public String deleteJob(String title);
	

}
