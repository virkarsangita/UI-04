import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Product from "./Product/Product";
import Course from "./Course/Course";
import Studentdetails from "../WEBComponet/StudentDetails/StudentDetails";
import Notfound from "./Notfound";

const Routess=()=>{
        return<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Course" element={<Course/>}/>
            <Route path="/Studentdetails" element={<Studentdetails/>}/>
            <Route path="*"element={<Notfound/>} />
        </Routes>
        </>
}
export default Routess;