package com.axis.entity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="jobopportunity")
public class Jobopportunity {
	
	private String project;
	private String title;
	private String description;
	private String skills;
	private String experience;
	private int vacancies;
	private String salary;
	
	public Jobopportunity(String project, String title, String description, String skills, String experience,int vacancies,String salary) {
		super();
		this.project = project;
		this.title = title;
		this.description = description;
		this.skills = skills;
		this.experience = experience;
		this.vacancies=vacancies;
		this.salary=salary;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public int getVacancies() {
		return vacancies;
	}
	public void setVacancies(int vacancies) {
		this.vacancies = vacancies;
	}
	public Jobopportunity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	
	
	
	
	
	
}
