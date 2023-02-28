package com.axis.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Comments;
import com.axis.repository.CommentsRepository;

@Service
public class CommentsServiceImpl implements CommentsService {
	
	@Autowired
	CommentsRepository commentsRepository;
	
	@Override
	public String addComments(Comments comments) {
		// TODO Auto-generated method stub
		commentsRepository.save(comments);
		return "added";
	}

	@Override
	public List<Comments> getByTitle(String title) {
		// TODO Auto-generated method stub
		List<Comments> comments=commentsRepository.findByTitle(title);
		List<Comments> sortedList=comments.stream().sorted(Comparator.comparing(Comments::getCreatedDate).reversed()).collect(Collectors.toList());
		
		return sortedList;
	}

	@Override
	public List<Comments> getAll() {
		// TODO Auto-generated method stub
		List<Comments> comments=commentsRepository.findAll();
		return comments;
	}
	
	@Override
	public String deleteComment(String comment) {
		// TODO Auto-generated method stub
		Comments comment1=commentsRepository.findByComment(comment);
		commentsRepository.delete(comment1);
		return "Comment deleted";
	}

	
	

}
