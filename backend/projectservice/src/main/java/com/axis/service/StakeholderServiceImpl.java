package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Stakeholder;
import com.axis.repository.StakeholderRepository;

@Service
public class StakeholderServiceImpl implements StakeholderService{

	@Autowired
	StakeholderRepository stakeholderRepository;
	@Override
	public Stakeholder addStakeholder(Stakeholder stakeholder) {
		// TODO Auto-generated method stub
		return stakeholderRepository.save(stakeholder) ;
	}

	@Override
	public List<Stakeholder> getAll() {
		// TODO Auto-generated method stub
		List<Stakeholder> stakeholders=stakeholderRepository.findAll();
		return stakeholders;
	}

	@Override
	public List<Stakeholder> getStakeholders(String project) {
		// TODO Auto-generated method stub
		List<Stakeholder> stakeholders=stakeholderRepository.findByProject(project);
		return stakeholders;
	}

}
