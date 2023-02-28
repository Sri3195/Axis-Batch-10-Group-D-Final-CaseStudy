package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Projects;
import com.axis.repository.ProjectsRepository;

@Service
public class ProjectsServiceImpl implements ProjectsService {
	@Autowired
	ProjectsRepository projectrepoRepository;

	@Override
	public Projects addProjects(Projects project) {
		// TODO Auto-generated method stub
		return projectrepoRepository.save(project);

	}

	@Override
	public List<Projects> getAllProjects() {
		// TODO Auto-generated method stub
		List<Projects> projects=projectrepoRepository.findAll();
		return projects;
	}

	@Override
	public Projects getByProjects(String title) {
		// TODO Auto-generated method stub
	Projects projects=projectrepoRepository.findByTitle(title);
		return projects;
	}

}

