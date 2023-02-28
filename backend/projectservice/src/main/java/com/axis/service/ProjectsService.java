package com.axis.service;

import java.util.List;

import com.axis.entity.Projects;

public interface ProjectsService {
	public Projects addProjects(Projects project);
	public List<Projects> getAllProjects();
	public Projects getByProjects(String title);
	
	
	

}
