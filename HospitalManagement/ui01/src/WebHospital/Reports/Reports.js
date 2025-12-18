import React, { useEffect, useState } from "react";
import "./Reports.css";

const Reports = () => {
  const [patients, setPatients] = useState([]);
  const [diseaseCount, setDiseaseCount] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(data);

    // disease wise count
    const count = {};
    data.forEach((item) => {
      count[item.disease] = (count[item.disease] || 0) + 1;
    });
    setDiseaseCount(count);
  }, []);

  return (
    <div className="container">
      <h2>Reports Dashboard</h2>

      {/* Summary Cards */}
      <div className="cards">
        <div className="card">
          <h3>Total Patients</h3>
          <p>{patients.length}</p>
        </div>

        <div className="card">
          <h3>Total Diseases</h3>
          <p>{Object.keys(diseaseCount).length}</p>
        </div>
      </div>

      {/* Disease Report */}
      <h3>Disease Wise Report</h3>
      <table>
        <thead>
          <tr>
            <th>Disease</th>
            <th>Patients Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(diseaseCount).map((key, index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{diseaseCount[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
