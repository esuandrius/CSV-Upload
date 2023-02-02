import React, { useState, useEffect } from "react";
import employeeService from "../services/employee.service";
import "bootstrap/dist/css/bootstrap.min.css";

const AppTesting = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployeesList();
  }, []);

  const getEmployeesList = () => {
    employeeService
      .getAll()
      .then((response) => {
        console.log("Printing the employees data", response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div
      className="container d-flex 
    justify-content-center 
    align-items-center"
    >
      <table className="table table-striped table-bordered table-responsive">
        <thead style={{ backgroundColor: "darkgrey" }}>
          {employees.map((employee) =>
            employee.id === 1 ? (
              <tr key={employee.id}>
                {/* <th>Id</th> */}
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            ) : null
          )}
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              {/* <td>{employee.id}</td> */}
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppTesting;
