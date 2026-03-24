import { Route, Router, Routes } from "react-router-dom"
import Home from '../../Devtools/Home/Home'
import About from "../../Devtools/About/About";
import Contact from "../../Devtools/Contact/Contact";
import Product from "../../Devtools/Product/Product";
import Notfound from "../../Devtools/Notfound/Notfound";
import Services from '../../Devtools/Services/Services';

const Rout=()=>{
    return<>
    <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
           <Route path="/Product" element={<Product/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Login" element={<Notfound/>}/>
    </Routes>
    </>
}

export default Rout;