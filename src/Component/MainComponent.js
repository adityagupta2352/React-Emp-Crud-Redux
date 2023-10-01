import React, { useState } from "react";
import Display from "../action/Display";

const buttonStyles = {
  margin: "10px", // Margin around the buttons
  backgroundColor: "#007bff", // Background color of the buttons
  color: "white", // Text color of the buttons
  padding: "10px 20px", // Padding inside the buttons
  border: "none", // Remove button borders
  borderRadius: "4px", // Rounded corners
  cursor: "pointer", // Change cursor on hover
};

const MainComponent = () => {
  const handle = (page) => {
    setCurrentPage(page);
  };

  const [currentPage, setCurrentPage] = useState(null);

  return (
    <div className="App-header1">
      <button
        style={buttonStyles}
        onClick={() => handle("AllEmp")}
      >
        Get All Employee
      </button>
      <button
        style={buttonStyles}
        onClick={() => handle("AddEmp")}
      >
        Add Employee
      </button>
      <Display page={currentPage} />
    </div>
  );
}

export default MainComponent;
