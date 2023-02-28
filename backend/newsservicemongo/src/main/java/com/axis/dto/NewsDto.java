package com.axis.dto;

import java.time.LocalDate;

public class NewsDto {

	private int id;
	private LocalDate dateCreated;
	private String title;
	private String subTitle;
	private String img;
	private String content;
	private String url;
	public NewsDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public NewsDto(int id, LocalDate dateCreated,String title, String subTitle, String img, String content, String url) {
		super();
		this.id=id;
		this.dateCreated = dateCreated;
		this.title = title;
		this.subTitle = subTitle;
		this.img = img;
		this.content = content;
		this.url = url;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public LocalDate getDateCreated() {
		return dateCreated;
	}
	public void setDateCreated(LocalDate dateCreated) {
		this.dateCreated = dateCreated;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSubTitle() {
		return subTitle;
	}
	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
}
