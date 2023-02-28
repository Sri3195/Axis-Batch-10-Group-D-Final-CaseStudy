package com.axis.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.axis.entity.Stakeholder;

@Repository
public interface StakeholderRepository extends MongoRepository<Stakeholder,Integer>{
	List<Stakeholder> findByProject(String project);
}
