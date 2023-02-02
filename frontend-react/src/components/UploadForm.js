import React, { useState } from "react";
import employeeService from "../services/employee.service";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="d-flex justify-content-center mt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            id="file"
            name="file"
            accept=".csv"
            onChange={handleFileSelect}
            className="form-control form-control-lg mb-1"
          />
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-lg border mt-4 w-auto mb-5"
          />
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
