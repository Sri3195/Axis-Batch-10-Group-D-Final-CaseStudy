package com.axis.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.axis.entity.Comments;

@Repository
public interface CommentsRepository extends MongoRepository<Comments, Integer> {
	List<Comments> findByTitle(String title);
	Comments findByComment(String comment);
}
