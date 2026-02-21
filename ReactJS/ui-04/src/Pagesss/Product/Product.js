import { useEffect, useState } from "react";
import Header from "../../ComponetePagesss/Header/Header";
import { studDetails } from "../Mockdata/Mockdata";
import { useNavigate } from "react-router-dom";
import Errormsg from "../../ComponetePagesss/Errormsg/Errormsg";

function Product(){
   

    const [Studentails,setStudentails]=useState(studDetails);

    console.log(Studentails,'student details@@@@@@@@');
        
    const navigate= useNavigate();
  
    useEffect(()=>{
    console.log('calling use effect');
    //setStudentails('calling set studentails');
   
},[])

const redirect=(item)=>{
        console.log(item,'Id******')
        navigate('/Stud')
       localStorage.setItem( 's_id',JSON.stringify(item))
    }


    return<>
    <div>
        <Header/>
    </div>
    <h3>this is product page</h3>
    <p>Student page</p>

    {Studentails.map((item,index)=>{
        return<div className="container mt-4 shadow" key={index}>
        <div className="card "  >
            <div className="card-body " >
                <p>Id:{item.id}</p>
                <p>Name:{item.name}</p>
                <p>Age:{item.age}</p>

                <button className="btn btn-primary" onClick={()=>redirect(item)}>View</button>
            </div>
        </div>
        </div>
    })}
    </>
}

export default Product;