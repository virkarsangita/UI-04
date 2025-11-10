
import {  useEffect, useState } from 'react';
import Header from '../../DevComponents/Header/Header';
import { Stud_Details } from '../../Devloper/Mockdata'
import './Product.css';


import {  useNavigate } from 'react-router-dom';



const Product =()=>{
      const[studentDetails ,setstudentDetails]=useState();

      const navigate=useNavigate();

      console.log(studentDetails,'studentDetails%%%%%%%#######$$$$$$$')

    useEffect(()=>{
        console.log('Use effect Worked.......');
        //settudentDetails('happy techer day');
        
    },[])
 
   const redirect =(item)=>{
    console.log('Id',item);
    navigate('/StudentDetails')
    localStorage.setItem('stud_id',JSON.stringify(item)) //setting id value localstroage
   }



    return<>
    <Header/>
    <h1> Welcome to Product page</h1>
    <h4>student details</h4>
    
    <div className='container'>
        { studentDetails?.length>0 ?studentDetails.slice(0,5).map((item,index)=>{
           
            return<div className='card mt-4'>
                <div className='card-body'key={index}>
                     <p>Id:{item.id}</p>
                    <p>Name:{item.name}</p>
                    <p>Email:{item.email}</p>
                    <p>Mobile:{item.mobile}</p>

                    <button className='btn btn-danger' onClick={()=>redirect(item)}>view</button>
                </div>
            </div>
}):'no data found'}
   </div>
   </>
}


export default Product;

