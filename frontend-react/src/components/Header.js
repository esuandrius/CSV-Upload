import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffcc",
        height: "60px",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "120px",
      }}
      className="border border-dark 
                rounded mt-1 d-flex 
                justify-content-center 
                align-items-center"
    >
      <h3>Employees CSV file Uploader</h3>
    </div>
  );
};

export default Header;
