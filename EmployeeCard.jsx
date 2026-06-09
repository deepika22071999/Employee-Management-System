import { useContext } from "react";
import EmployeeContext from "../Context/EmployeeContext";

function EmployeeCard({ employee }) {

  const { dispatch } =
    useContext(EmployeeContext);

  const deleteEmployee = () => {
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: employee.id,
    });
  };

  return (
    <div className="employee-card">

      <h2 style={{ color: "black" }}>
  {employee.name}
</h2>

<p style={{ color: "black" }}>
  {employee.email}
</p>

<p style={{ color: "black" }}>
  {employee.department}
</p>

<p style={{ color: "black" }}>
  ₹{employee.salary}
</p>

      <button
        className="delete-btn"
        onClick={deleteEmployee}
      >
        Delete
      </button>

    </div>
  );
}

export default EmployeeCard;