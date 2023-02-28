package com.axis.dto;

import java.sql.Date;

public class EmployeeDto {
	
	private int id;
	private String empId;
	private String name;
	private String email;
	private long phno;
	private Date startDate;
	private String dept;
	private String deptHead;
	private String designation;
	private String project;
	private String img;
	public EmployeeDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EmployeeDto(String empId,String name, String email, long phno, Date startDate, String dept, String deptHead,
			String designation, String project,String img) {
		super();
		//this.id = id;
		this.empId=empId;
		this.name = name;
		this.email = email;
		this.phno = phno;
		this.startDate = startDate;
		this.dept = dept;
		this.deptHead = deptHead;
		this.designation = designation;
		this.project = project;
		this.img=img;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhno() {
		return phno;
	}
	public void setPhno(long phno) {
		this.phno = phno;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getDeptHead() {
		return deptHead;
	}
	public void setDeptHead(String deptHead) {
		this.deptHead = deptHead;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	
	

}
