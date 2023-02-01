package com.csv.upload.app.controller;

import com.csv.upload.app.entity.Employee;
import com.csv.upload.app.service.EmployeeService;
import com.univocity.parsers.common.record.Record;
import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {

        return employeeService.getAllEmployeesFromDB();
    }

    @PostMapping("/upload")
    public String uploadCsvData(@RequestParam("file") MultipartFile file) throws IOException {
        List<Employee> employeeList = new ArrayList<>();

        InputStream inputStream = file.getInputStream();
        CsvParserSettings settings = new CsvParserSettings();
        settings.setHeaderExtractionEnabled(true);
        CsvParser parser = new CsvParser(settings);
        List<Record> parseAllRecords = parser.parseAllRecords(inputStream);
        parseAllRecords.forEach(record -> {
            Employee employee = new Employee();
            employee.setName(record.getString("name"));
            employee.setEmail(record.getString("email"));
            employee.setPhoneNumber(record.getString("Phone Number"));

            employeeList.add(employee);
        });

        employeeService.saveAllEmployeesToDB(employeeList);

        return "Upload completed successfully!";
    }

}
