import React, { useEffect, useState } from "react";
import "./Appointments.css";

const AppointmentData = [
  {
    id: 1,
    patientName: "Rahul",
    doctorName: "Dr. Sharma",
    date: "2025-01-10",
    time: "10:30 AM"
  },
  {
    id: 2,
    patientName: "Pooja",
    doctorName: "Dr. Mehta",
    date: "2025-01-11",
    time: "11:00 AM"
  }
];

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments"));

    if (data && data.length > 0) {
      setAppointments(data);
    } else {
      localStorage.setItem("appointments", JSON.stringify(AppointmentData));
      setAppointments(AppointmentData);
    }
  }, []);

  const deleteAppointment = (id) => {
    const updated = appointments.filter((item) => item.id !== id);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Appointments List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.length > 0 ? (
            appointments.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.patientName}</td>
                <td>{item.doctorName}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => deleteAppointment(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No Appointments Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
