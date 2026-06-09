import {
  useState,
  useContext,
  useRef
} from "react";

import EmployeeContext
from "../Context/EmployeeContext";

function AddEmployee() {

  const { dispatch } =
    useContext(EmployeeContext);

  const fileRef = useRef();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [department, setDepartment] =
    useState("");

  const [salary, setSalary] =
    useState("");

  const [error, setError] =
    useState("");

  const addEmployee = () => {

    if (
      !name ||
      !email ||
      !department ||
      !salary
    ) {
      setError(
        "All fields are required"
      );
      return;
    }

    dispatch({
      type: "ADD_EMPLOYEE",

      payload: {
        id: Date.now(),
        name,
        email,
        department,
        salary,
      },
    });

    setName("");
    setEmail("");
    setDepartment("");
    setSalary("");
    setError("");
  };

  return (

    <div className="page">

      <h1>Add Employee</h1>

      {
        error &&
        <p className="error">
          {error}
        </p>
      }

      <div className="form-container">

        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e)=>
            setDepartment(e.target.value)
          }
        />

        <input
  type="text"
  placeholder="Salary"
  value={salary}
  onChange={(e) => setSalary(e.target.value)}
/>
        <input
          type="file"
          ref={fileRef}
        />

        <button
          className="add-btn"
          onClick={addEmployee}
        >
          Add Employee
        </button>

      </div>

    </div>

  );
}

export default AddEmployee;