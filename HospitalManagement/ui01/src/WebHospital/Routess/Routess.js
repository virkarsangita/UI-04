import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Dashboard from '../Dashboard/Dashboard';
import Patients from '../Patients/Patients';
import Doctors from '../Doctors/Doctor';
import Appointments from '../Appoinments/Appointments';
import Reports from '../Reports/Reports';

const Routess=()=>{
    return<>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/reports" element={<Reports />} />
        
    </Routes>
    </>
}

export default Routess;