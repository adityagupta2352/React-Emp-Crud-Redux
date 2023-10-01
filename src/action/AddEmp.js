import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmpRed } from ".";

export const AddEmp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mainEmp);

  const inputStyle = {
    marginBottom: '10px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    width: '50%',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '40px',
    cursor: 'pointer',
  };

  function saveData(num1, num2) {
    const id = num1.trim();
    const name = num2.trim();
  
    if (id === '' || name === '') {
      alert('Please enter both ID and Name.');
    } 
    else if (data.employee.some((employee) => employee.empId === id)) {
      alert('An employee with the same ID already exists.');
    } 
    else {
      const employee = {
        empId: id,
        name: name,
    };
  
    dispatch(addEmpRed(employee));
    document.getElementById("t1").value = '';
    document.getElementById("t2").value = '';
    }
  }
  
  return (
    <div className="App-header1">
      <div className="App-header1">Add Employee</div>
      <div>
        <label>ID:</label>
        <input id="t1" type="text" placeholder="Employee ID" name="id" style={inputStyle} />
      </div>
      <div>
        <label>Name:</label>
        <input id="t2" type="text" placeholder="Employee Name" name="Name" style={inputStyle} />
      </div>

      <button
        onClick={() => {
          saveData(
            document.getElementById("t1").value,
            document.getElementById("t2").value
          );
        }}
        style={buttonStyle}
      >
        Save
      </button>
    </div>
  );
};
