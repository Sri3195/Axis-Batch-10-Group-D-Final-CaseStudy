package com.axis.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.axis.entity.Supporter;

@Repository
public interface SupporterRepository extends MongoRepository<Supporter,Integer> {
	List<Supporter> findByProject(String project);
}
