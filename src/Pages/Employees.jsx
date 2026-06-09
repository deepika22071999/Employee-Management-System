import { useContext } from "react";
import EmployeeContext from "../Context/EmployeeContext";
import EmployeeCard from "../Components/EmployeeCard";

function Employees() {

  const context = useContext(EmployeeContext);

  if (!context) {
    return <h2>Context Not Found</h2>;
  }

  const { employees } = context;

  return (
    <div className="page">

      <h1>Employee List</h1>

      <div className="employee-grid">

        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />
        ))}

      </div>

    </div>
  );
}

export default Employees;