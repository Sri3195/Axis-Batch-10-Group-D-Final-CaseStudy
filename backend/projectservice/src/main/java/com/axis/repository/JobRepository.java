package com.axis.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.axis.entity.Jobopportunity;

@Repository
public interface JobRepository extends MongoRepository<Jobopportunity, Integer>{
	List<Jobopportunity> findByProject(String project);
	Jobopportunity findByTitle(String title);
}
