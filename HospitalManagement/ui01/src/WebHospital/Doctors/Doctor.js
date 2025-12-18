import React, { useEffect, useState } from "react";
import "./Doctors.css";

const DoctorData = [
  { id: 1, name: "Dr. Sharma", specialization: "Cardiologist", experience: 10, phone: "9876543210" },
  { id: 2, name: "Dr. Mehta", specialization: "Dermatologist", experience: 5, phone: "9123456780" }
];

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("doctors"));

    if (data && data.length > 0) {
      setDoctors(data);
    } else {
      localStorage.setItem("doctors", JSON.stringify(DoctorData));
      setDoctors(DoctorData);
    }
  }, []);

  const deleteDoctor = (id) => {
    const updated = doctors.filter((item) => item.id !== id);
    setDoctors(updated);
    localStorage.setItem("doctors", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Doctors List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {doctors.length > 0 ? (
            doctors.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.specialization}</td>
                <td>{item.experience} yrs</td>
                <td>{item.phone}</td>
                <td>
                  <button className="delete" onClick={() => deleteDoctor(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Doctors Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;
