import { useEffect, useState } from "react";
import{ProdDetails} from'../Mockdata/Mockdata';
import { useNavigate } from "react-router-dom";
const Stud=()=>{

    const [STUDDetail,setSTUDDetail]=useState();
    console.log(STUDDetail,'STUD************');

    const navigate=useNavigate();

    const abc=()=>{
        navigate('/Product');
    }

    useEffect(()=>{
        const s_data=JSON.parse(localStorage.getItem('s_id'));
        setSTUDDetail(s_data);
    console.log(s_data.id,'student data*********');
    },[])
    
    return<>
    <h1> this is Student Details page </h1>
    {STUDDetail?(
        <div className="container ">
            <div className="card shadow">
            <p>IDD:{STUDDetail.id}</p>
            <p>Name:{STUDDetail.name}</p>
            <p>Age:{STUDDetail.age}</p>
            <p>Gendre:{STUDDetail.Gender}</p>
            <p>Blood:{STUDDetail.Blood}</p>
            <p>Addres:{STUDDetail.Addres}</p>
            <p>city:{STUDDetail.city}</p>

            <button className="btn btn-danger" style={{height:'40px', width:'20%',display:'flex',justifyContent:'center'}} onClick={()=>abc()}>Back</button>
            </div>
        </div>
    ):<p>no data found</p>}
    
    </>
}

export default Stud;