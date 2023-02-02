package com.csv.upload.app.service;

import com.csv.upload.app.entity.Employee;
import com.csv.upload.app.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAllEmployeesFromDB() {
        return employeeRepository.findAll();
    }

    @Override
    public void saveAllEmployeesToDB(List<Employee> employeeList) {
        employeeRepository.saveAll(employeeList);
    }
}
