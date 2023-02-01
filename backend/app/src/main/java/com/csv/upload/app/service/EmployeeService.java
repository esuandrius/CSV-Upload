package com.csv.upload.app.service;

import com.csv.upload.app.entity.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> getAllEmployeesFromDB();

    void saveAllEmployeesToDB(List<Employee> employeeList);
}
