package com.axis.service;

import java.util.List;


import com.axis.entity.Comments;

public interface CommentsService {

	public String addComments(Comments comments);
	public List<Comments> getAll();
	public List<Comments> getByTitle(String title);
	public String deleteComment(String comment);
}
