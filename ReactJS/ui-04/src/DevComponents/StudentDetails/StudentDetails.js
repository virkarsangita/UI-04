import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StudMoreDetails } from '../../Devloper/Mockdata';
import './StudentDetails.module.scss';
const StudentDetails=()=>{

    const [studdetails,setstuddetails]=useState([{}]);

    const [studmoredetails,setstudentmoredetails]=useState(StudMoreDetails)

    console.log(studmoredetails,'studmoredetaild####@@@@@@@');
    
    
    const navigate =useNavigate();

    console.log(studdetails,'studdetails####@@@@@@');

    useEffect (()=>{
        const stud_data= JSON.parse(localStorage.getItem('stud_id'));
        //console.log(stud_data.id,'stud_data@###')
        setstuddetails(stud_data);
        setstudentmoredetails(StudMoreDetails)
    },[])

    const redire=()=>{
        navigate('/Product');
    }
    return<>
    <h1> student Profile Details</h1>

    <div className='container'>
        <div className='card mt-4'>
            <div className='card-body'>
                <p>Id:{studdetails.id}</p>
                 <p>Name:{studdetails.name}</p>
                  <p>Email:{studdetails.email}</p>
                   <p>Mobile:{studdetails.mobile}</p>

                   <p>Gendre:{studmoredetails[0].Gendre}</p>
                 <p>Blood:{studmoredetails[0].Blood}</p>
                  <p>Addr:{studmoredetails[0].Addres}</p>
                   <p>City:{studmoredetails[0].city}</p>
            </div>
            <button className='btn btn-success' onClick={()=>redire()}>back</button>
        </div>
    </div>
    
    </>
}

export default StudentDetails;