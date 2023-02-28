package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.NewsDto;
import com.axis.service.NewsService;

@RestController
@RequestMapping("/newsfeed")
public class NewsController {

		@Autowired
		NewsService newsService;
		
		@PostMapping("/create")
		public ResponseEntity<NewsDto> addNews(@RequestBody NewsDto newsDto)
		{
			NewsDto newsDto1=newsService.addNews(newsDto);
			return new ResponseEntity<NewsDto>(newsDto1, HttpStatus.OK);
		}
		
		@GetMapping("/all")
		public ResponseEntity<List<NewsDto>> getAll()
		{
			List<NewsDto> newsDtos=newsService.getAll();
			return new ResponseEntity<List<NewsDto>>(newsDtos,HttpStatus.OK);
		}
		
		@GetMapping("/title")
		public ResponseEntity<NewsDto> getByTitle(@RequestParam String title)
		{
			NewsDto newsDto=newsService.getByTitle(title);
			return new ResponseEntity<NewsDto>(newsDto,HttpStatus.OK);
		}
		
		@DeleteMapping("/delete")
		public ResponseEntity<String> deleteNews(@RequestParam String title)
		{
			String result=newsService.deleteNews(title);
			return new ResponseEntity<String>(result,HttpStatus.OK);
		}
		
}
