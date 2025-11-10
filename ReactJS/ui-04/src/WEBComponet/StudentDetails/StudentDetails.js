import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const Studentdetails=()=>{
   const s_id = JSON.parse(localStorage.getItem('stud_id'));

   const[studtails,setstudtdetails]=useState();

   const navigate=useNavigate();

   const redirte=()=>{
    navigate('/Product');
   }

    return<>
    <h1>Welcome student details</h1>
    <p>Student Page </p>
     <div className="container">
        <div className="card mt-4 shadow">
            <div className="card-body">
                <p>ID: {s_id.id}</p>
                <p>Name: {s_id.name}</p>
                <p>City: {s_id.city}</p>
                <p>Age: {s_id.age}</p>
            </div>
            <button className="btn" style={{backgroundColor:'green', color:'white', border:'1px solid green', height:40 ,width:'20%',margin:'auto',display:'block'}} onClick={()=>redirte()}>bact</button>
        </div>
     </div>
  
  
    </>
}

export default Studentdetails;