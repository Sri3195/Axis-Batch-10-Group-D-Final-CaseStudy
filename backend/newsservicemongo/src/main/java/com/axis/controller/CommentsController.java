package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Comments;
import com.axis.service.CommentsService;

@RestController
@RequestMapping("/comments")
public class CommentsController {
	
	@Autowired
	CommentsService commentsService;
	
	@PostMapping("/create")
	public ResponseEntity<String> addNews(@RequestBody Comments comments)
	{
		String result=commentsService.addComments(comments);
		return new ResponseEntity<String>(result, HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Comments>> getAll()
	{
		List<Comments> comments=commentsService.getAll();
		return new ResponseEntity<List<Comments>>(comments,HttpStatus.OK);
	}
	@GetMapping("/allbytitle")
	public ResponseEntity<List<Comments>> getByTitle(@RequestParam String title)
	{
		List<Comments> comments=commentsService.getByTitle(title);
		return new ResponseEntity<List<Comments>>(comments,HttpStatus.OK);
	}
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteComment(@RequestParam String comment)
	{
		String result=commentsService.deleteComment(comment);
		return new ResponseEntity<String>(result,HttpStatus.OK);
	}

}
