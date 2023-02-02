# CSV-Upload

This project consists of two applications: one is a Spring Boot Rest API called  backend-spring and another is a ReactJS application called frontend-react. Main goal to upload employees data to memorybase, and get it visualised in a HTML table.

![upload-csv](https://user-images.githubusercontent.com/111871226/216392469-d1cd40eb-28c9-4a88-9488-c9b895f29769.PNG)

CSV File Upload in React, passing file to Spring Boot, writing in to H2 memorybase, then fetching data to React HTML table.

## How to launch

Clone the repository:

<pre>git clone https://github.com/esuandrius/CSV-Upload.git</pre>

Navigate to the newly created folder:

<pre>cd CSV-Upload</pre>

### Frontend application

Install NodeJs.v.16.13.1 /npm v.8.3.0

Navigate to frontend-react subfolder:
<pre>cd frontend-react</pre>

Install the modules
<pre>npm i react-scripts</pre>

Start the application on local host:
<pre>npm start</pre>

Automatically navigates in your browser to (or change to other port if it is used):
<pre>http://localhost:3000</pre>

### Backend application

Install Java >= 1.8/Maven 3.6.x/Project Lombok >= 1.18.20

Open subfolder backend-spring with your IDE
<pre>run application</pre>

Navigate in your browser to (or change to port if it is used):
<pre>http://localhost:8080/employees</pre>

### endpoints

- Get list of Employees from database, also works with endpoints("", "/", "/index")
<pre>http://localhost:8080/employees</pre>

- Receive uploaded CSV file
<pre>http://localhost:8080/upload</pre>

- H2 memorybase access
<pre>http://localhost:8080/h2-console</pre>

Login information as below:

![image](https://user-images.githubusercontent.com/111871226/216017555-2e26b159-15ef-4d37-b699-82b55287bb25.png)

Table name EMPLOYEES, column names ID, NAME, EMAIL, PHONE_NUMBER

![image](https://user-images.githubusercontent.com/111871226/216018510-3b2b31a9-fc50-431d-8a24-6fad363e301e.png)

### Additional Resources

- added employees.csv file for testing.
