import React from 'react'
import { useState } from 'react';


export default function Task2() {
   const [employees, setEmployees] = useState([
    { name: 'durga', salary: 100 },
    { name: 'prasad', salary: 200 }
  ]);
   

  return (
    <div>
      <h2>Employee List</h2>
     <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr >
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}
