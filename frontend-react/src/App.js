import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import UploadForm from "./components/UploadForm";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <UploadForm />
      <Table />
    </div>
  );
}

export default App;
