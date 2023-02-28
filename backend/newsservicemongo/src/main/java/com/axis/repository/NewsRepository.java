package com.axis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.axis.entity.News;

@Repository
public interface NewsRepository extends MongoRepository<News, Integer> {
	News findByTitle(String title);
	//List<News> findByDatecreated(Date date);
	
}
