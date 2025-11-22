import { Route, Router, Routes } from "react-router-dom";
import React from "react";
import Home from '../../WebPage/Home/Home';
import About from '../../WebPage/About/About';
import Menu from '../../WebPage/Menu/Menu';
import Gallery from '../../WebPage/Gallery/Gallery';
import Review from '../../WebPage/Review/Review';
import Order from '../../WebPage/Order/Order';



const Routess=()=>{
    return<>
       
        <Routes>
        <Route path="/" element={< Home/>}/>
         <Route path="/About" element={< About/>}/>
          <Route path="/Menu" element={< Menu/>}/>
           <Route path="/Gallery" element={< Gallery/>}/>
            <Route path="/Review" element={< Review/>}/>
             <Route path="/Order" element={< Order/>}/>
             </Routes>
            
             
    
    
    </>
    
}

export default Routess;