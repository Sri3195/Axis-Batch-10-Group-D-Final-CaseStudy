package com.axis.entity;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="projects")
public class Projects {
	private String title;
	private String subtitle;
	private String intro;
	private String description;
	private String image;
	private String flowchart;
	private LocalDate startDate;
	private LocalDate endDate;
	private String status;
	private String ownerName;
	private String ownerDesignation;
	private String email;
	private String phNo;
	private String ownerImage;
	public Projects() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Projects(String title, String subtitle, String intro, String description, String image, String flowchart,
			LocalDate startDate, LocalDate endDate,String status,String ownerName,String ownerDesignation,String email,String phNo,String ownerImage) {
		super();
		this.title = title;
		this.subtitle = subtitle;
		this.intro = intro;
		this.description = description;
		this.image = image;
		this.flowchart = flowchart;
		this.startDate = startDate;
		this.endDate = endDate;
		this.status=status;
		this.ownerName=ownerName;
		this.ownerDesignation=ownerDesignation;
		this.email=email;
		this.phNo=phNo;
		this.ownerImage=ownerImage;
	}
	public String getOwnerImage() {
		return ownerImage;
	}
	public void setOwnerImage(String ownerImage) {
		this.ownerImage = ownerImage;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getOwnerDesignation() {
		return ownerDesignation;
	}
	public void setOwnerDesignation(String ownerDesignation) {
		this.ownerDesignation = ownerDesignation;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhNo() {
		return phNo;
	}
	public void setPhNo(String phNo) {
		this.phNo = phNo;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSubtitle() {
		return subtitle;
	}
	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}
	public String getIntro() {
		return intro;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getFlowchart() {
		return flowchart;
	}
	public void setFlowchart(String flowchart) {
		this.flowchart = flowchart;
	}
	public LocalDate getStartDate() {
		return startDate;
	}
	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}
	public LocalDate getEndDate() {
		return endDate;
	}
	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
	
	
	

}

