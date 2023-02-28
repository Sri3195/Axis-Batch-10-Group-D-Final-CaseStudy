package com.axis.service;

import java.util.List;

import com.axis.entity.Stakeholder;

public interface StakeholderService {
	
	public Stakeholder addStakeholder(Stakeholder stakeholder);
	public List<Stakeholder> getAll();
	public List<Stakeholder> getStakeholders(String project);
  
}
