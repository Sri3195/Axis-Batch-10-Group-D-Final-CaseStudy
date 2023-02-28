package com.axis.service;

import java.util.List;

import com.axis.entity.Supporter;

public interface SupporterService {

	public Supporter addSupporter(Supporter supporter);
	public List<Supporter> getAll();
	public List<Supporter> getSupporters(String project);
}
