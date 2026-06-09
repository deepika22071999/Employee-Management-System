import {
  NavLink,
} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        EMS
      </h2>

      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/employees">
          Employees
        </NavLink>

        <NavLink to="/addemployee">
          Add Employee
        </NavLink>

        <NavLink to="/departments">
          Departments
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/employeeapi">
  API Data
</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;