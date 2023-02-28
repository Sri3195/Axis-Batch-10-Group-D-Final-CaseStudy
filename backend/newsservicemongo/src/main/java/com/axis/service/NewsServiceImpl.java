package com.axis.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.NewsDto;
import com.axis.entity.News;
import com.axis.repository.NewsRepository;

@Service
public class NewsServiceImpl implements NewsService{

	@Autowired 
	NewsRepository newsRepository;
	
	@Override
	public NewsDto addNews(NewsDto newsDto) {
		// TODO Auto-generated method stub
		News news=newsRepository.save(convertToEntity(newsDto));
		return convertToDto(news);
	}

	@Override
	public List<NewsDto> getAll() {
		// TODO Auto-generated method stub
		List<NewsDto> newsDtos=new ArrayList<>();
		List<News> newses=newsRepository.findAll();
		for(News news:newses) {
			newsDtos.add(convertToDto(news));
		}
		List<NewsDto> sortedList=newsDtos.stream().sorted(Comparator.comparing(NewsDto::getDateCreated).reversed()).collect(Collectors.toList());
		
		return sortedList;
	}

	@Override
	public NewsDto getByTitle(String title) {
		// TODO Auto-generated method stub
		News news=newsRepository.findByTitle(title);
		return convertToDto(news);
	}

	/*@Override
	public List<NewsDto> getByDates(Date date) {
		// TODO Auto-generated method stub
		List<NewsDto> newsDtos=new ArrayList<>();
		List<News> newses=newsRepository.findByDatecreated(date);
		for(News news:newses) {
			newsDtos.add(convertToDto(news));
		}
		return newsDtos;
	}*/
	
	@Override
	public String deleteNews(String title) {
		// TODO Auto-generated method stub
		News news=newsRepository.findByTitle(title);
		newsRepository.delete(news);
		return "News deleted";
	}

	private NewsDto convertToDto(News news)
	{
		NewsDto newsDto=new ModelMapper().map(news,NewsDto.class);
		return newsDto;
	}
	
	private News convertToEntity(NewsDto newsDto)
	{
		News news=new ModelMapper().map(newsDto,News.class);
		return news;
	}
	
}
