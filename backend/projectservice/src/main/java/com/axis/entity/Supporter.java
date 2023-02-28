package com.axis.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="supporters")
public class Supporter {
	
	private String project;
	private String name;
	private String designation;
	private String image;
	public Supporter(String project, String name, String designation, String image) {
		super();
		this.project = project;
		this.name = name;
		this.designation = designation;
		this.image = image;
	}
	public Supporter() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	

}
