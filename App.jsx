import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Employees from "./Pages/Employees";
import AddEmployee from "./Pages/AddEmployee";
import Departments from "./Pages/Departments";
import { useReducer } from "react";
import EmployeeAPI from "./Pages/EmployeeAPI";

import EmployeeContext
from "./Context/EmployeeContext";

import { employeeReducer }
from "./reducer/EmployeeReducer";

const initialEmployees = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    department: "HR",
    salary: 50000,
  },

  {
    id: 2,
    name: "David",
    email: "david@gmail.com",
    department: "IT",
    salary: 65000,
  },

  {
    id: 3,
    name: "Chris",
    email: "chris@gmail.com",
    department: "Finance",
    salary: 70000,
  },
];
function App() {

  const [employees, dispatch] =
  useReducer(
    employeeReducer,
    initialEmployees
  );

  console.log(employees);
  console.log(dispatch);

  return (

<EmployeeContext.Provider
value={{
  employees,
  dispatch
}}
>

  <BrowserRouter>

    <Navbar />

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/employees"
        element={<Employees />}
      />

      <Route
        path="/addemployee"
        element={<AddEmployee />}
      />

      <Route
        path="/departments"
        element={<Departments />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
  path="/employeeapi"
  element={<EmployeeAPI />}
/>

    </Routes>

  </BrowserRouter>

</EmployeeContext.Provider>

);
}

export default App;