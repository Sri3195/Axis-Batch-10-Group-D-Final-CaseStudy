package com.axis.service;


import java.util.List;

import com.axis.dto.NewsDto;


public interface NewsService {
	public NewsDto addNews(NewsDto newsDto);
	public List<NewsDto> getAll();
	public NewsDto getByTitle(String title);
	//public List<NewsDto> getByDates(Date date);
	public String deleteNews(String title);
}
