package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Supporter;
import com.axis.repository.SupporterRepository;

@Service
public class SupporterServiceImpl implements SupporterService{

	@Autowired
	SupporterRepository supporterRepository;
	@Override
	public Supporter addSupporter(Supporter supporter) {
		// TODO Auto-generated method stub
		return supporterRepository.save(supporter);
	}

	@Override
	public List<Supporter> getAll() {
		// TODO Auto-generated method stub
		List<Supporter> supporters=supporterRepository.findAll();
		return supporters;
	}

	@Override
	public List<Supporter> getSupporters(String project) {
		// TODO Auto-generated method stub
		List<Supporter> supporters=supporterRepository.findByProject(project);
		return supporters;
	}

	
}
