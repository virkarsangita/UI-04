import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../WEBComponet/Header/Header";
import style from './About.module.scss'
import { useEffect } from "react";
const About =()=>{

    const navigate =useNavigate();
    const location = useLocation();
    const redirtpage=()=>{
        navigate('/Addcandiate');
    }

    useEffect(()=>{
        const urlpath = location.pathname;
        console.log(urlpath,'urlpath@####');
        localStorage.setItem('redirtpage',urlpath);
    },[]);

    return<>
    <Header/>
    <h1>Welcome To About</h1>
    <button className={style.Btn} onClick={()=>redirtpage()} >AddCandiate</button>
    </>
    
}

export default About;