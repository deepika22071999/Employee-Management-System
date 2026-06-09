import { useEffect, useState } from "react";

function EmployeeAPI() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
     .then((response) => response.json())
.then((data) => {
  console.log(data);
  setUsers(data);
});

  }, []);

  return (
    <div className="page">

      <h1>Employee API Data</h1>

      <div className="employee-grid">

        {users.slice(0, 6).map((user) => (

          <div
            key={user.id}
            className="employee-card"
          >

           <h3 style={{ color: "black" }}>
  {user.name}
</h3>

<p style={{ color: "black" }}>
  {user.email}
</p>

<p style={{ color: "black" }}>
  {user.phone}
</p>

<p style={{ color: "black" }}>
  {user.website}
</p>

          </div>

        ))}
        

      </div>

    </div>
  );
}

export default EmployeeAPI;
