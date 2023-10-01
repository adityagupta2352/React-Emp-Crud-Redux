import { deleteEmp } from ".";
import "./App1.css";
import { useDispatch, useSelector } from "react-redux";

const AllEmp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mainEmp);

  return (
    <>
      <div className="App-header1">
        <div>
          <h2>Employee List</h2>
          <ul>
            {data.employee.map((employee) => (
              <li key={employee.empId} className="employee-item">
                <div>
                  <span>ID: {employee.empId}</span>
                  <span>Name: {employee.name}</span>
                </div>
                <div>
                  <button onClick={() => dispatch(deleteEmp(employee.empId))} className="delete-button">Delete</button>
                  <button className="delete-button">Update</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default AllEmp;
