import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="container">
      <UploadForm />
      <br />
      <br />
      <Table />
    </div>
  );
}

export default App;
