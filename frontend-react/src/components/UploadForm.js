import React, { useState } from "react";
import employeeService from "../services/employee.service";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", selectedFile);

    employeeService
      .upload(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    window.location.reload(false);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees CSV file Upload</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="file"
          name="file"
          accept=".csv"
          onChange={handleFileSelect}
        />
        <input type="submit" value="Upload" className="border border-dark" />
      </form>
    </div>
  );
};

export default UploadForm;
