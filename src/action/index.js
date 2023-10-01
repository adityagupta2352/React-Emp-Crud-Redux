export const addEmpRed = (emp) => {
  return {
    type: "ADD",
    payload : emp
  };
};


export const getEmp = () => {
  return {
    type: "GET",
  };
};

export const deleteEmp = (empId) => {
  return {
    type: "DELETE",
    payload: empId,
  };
};

// Update your actions.js
export const updateEmp = (empId, updatedName) => {
  return {
    type: "UPDATE",
    payload: { empId, updatedName },
  };
};

