package com.sms.model.repository;
import java.util.ArrayList;
import java.util.List;
import com.sms.model.*;


public class StudentRepository {

		private List<Student> Students=new ArrayList<>(); 
		public boolean addStudent(Student Student) {
			Students.add(Student);
			return true;
	}
		public List<Student>findAll(){
			return Students;
		}
        public int findById(int id) {
        	for(Student Students:Students) {
        		if(((Student)Students).getID()==id) {
                  return id;      			
        		}
        	}
        	return 0;
        }
}
