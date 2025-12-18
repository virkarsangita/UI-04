import React, { useState, useEffect } from "react";
import "./Patients.css";

const Pat = [
  { id: 1, name: "Rahul", age: 25, disease: "Fever" },
  { id: 2, name: "Pooja", age: 30, disease: "Cold" }
];

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // localStorage check
    const data = JSON.parse(localStorage.getItem("patients"));

    if (data && data.length > 0) {
      setPatients(data);
    } else {
      // agar localStorage empty hai to default data save + show
      localStorage.setItem("patients", JSON.stringify(Pat));
      setPatients(Pat);
    }
  }, []);

  const deletePatient = (id) => {
    const updated = patients.filter((item) => item.id !== id);
    setPatients(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Patients List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.length > 0 ? (
            patients.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.disease}</td>
                <td>
                  <button className="delete" onClick={() => deletePatient(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Patients Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
