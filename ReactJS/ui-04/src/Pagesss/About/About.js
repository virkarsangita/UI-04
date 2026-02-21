import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../ComponetePagesss/Header/Header";
import { useEffect } from "react";
function About(){

    const navigate=useNavigate();

    const location=useLocation();

    const redirect=()=>{
        navigate('/Addcandidate')
    }

    useEffect(()=>{
        const urlpath=location.pathname;
        console.log('redirecturl',urlpath);
    },[])
    return<>
    <div>
        <Header/>
    </div>
    <h2>this is about page</h2>

    <button className="btn btn-primary" onClick={() => redirect()}>Add candidate</button>
    </>
}

export default About;