const initialState = {
  employee: [
    { empId: "0", name: "Aditya" },
    { empId: "1", name: "Jay" },
    { empId: "2", name: "Vaibhav" },
    { empId: "3", name: "Aman" },
    { empId: "4", name: "Piyush" },
    { empId: "5", name: "Abhishek" },
  ],
};

const mainEmp = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state };
    case "DELETE":
      return {
        ...state,
        employee: state.employee.filter((emp) => emp.empId !== action.payload),
      };
    case "ADD":
      return {
        ...state,
        employee: [...state.employee, action.payload],
      };
    case "UPDATE":
      return {
        ...state,
        employee: state.employee.map((emp) =>
          emp.empId === action.payload.empId
            ? { ...emp, name: action.payload.updatedName }
            : emp
        ),
      };

    default:
      return state;
  }
};

export default mainEmp;
