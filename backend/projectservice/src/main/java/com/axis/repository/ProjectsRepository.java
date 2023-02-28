package com.axis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

import com.axis.entity.Projects;

@Repository
public interface ProjectsRepository extends MongoRepository<Projects, Integer> {
  Projects findByTitle(String title);

}