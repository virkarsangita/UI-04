import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { studentdetails } from '../../WEB/Mockdata.js';
import Header from "../../WEBComponet/Header/Header";
import './Product.module.scss';
const Product =()=>{
  
    const[studtdetails,setstudtdetails]=useState(studentdetails);
     const navigate=useNavigate();

    const redirct=(item)=>{
        console.log('ID******',item);
        navigate('/Studentdetails');
     
         localStorage.setItem('stud_id',JSON.stringify(item));
    }

    useEffect(()=>{
        console.log('use effect worked.....');
        //setstudtdetails='Hello Teacher Day';
       

    },[])
    /*console.log(studentdetails,'studentdetails@@@@@@###');*/
    return<>
    <Header/>
    <h1>Welcome To Product</h1>

    <div className="container">
        <h2>Student details</h2>
        { studentdetails.length>0 ? studtdetails.slice(0,3) .map((item,index)=>{
            return<div className="card mt-4 shadow" key={index}>
                <div className="card-body">
                    <p>ID:{item.id}</p>
                    <p>Name:{item.name}</p>
                    <p>City:{item.city}</p>
                    <p>Age:{item.age}</p>
            <button onClick={()=>redirct(item)}  style={{backgroundColor:'blue',color:'white', border:'1px solid blue'}}>view</button>
                </div>
                
            </div>
        }):'no data found'}
        </div>
    

    
    </>
}

export default Product;