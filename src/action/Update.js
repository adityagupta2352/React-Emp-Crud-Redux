// Update.js
import React, { useState } from 'react';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
};

const Update = ({ employee, onUpdate, onClose }) => {
  const [updatedName, setUpdatedName] = useState(employee.name);

  const handleUpdate = () => {
    onUpdate(employee.empId, updatedName);
    onClose();
  };

  return (
    <div style={modalStyle} className="update-modal">
      <h3>Update Employee Information</h3>
      <label>Name:</label>
      <input
        type="text"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Update;
