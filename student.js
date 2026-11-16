package com.sms.service;
import java.util.List;
import com.sms.model.Student;

public class StudentService {
	public interface Students{
		public boolean addStudent();
		public List<Student> findAll();
		public int findByid(int id);
	}

}
