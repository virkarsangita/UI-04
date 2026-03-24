import { Route, Router, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from '../About/About';
import Product from '../Product/Product';
import Blog from '../Blog/Blog';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Stud from "../Stud/Stud";
import Addcandidate from "../../ComponetePagesss/Addcandidate/Addcandidate";

function Routesss(){
    return<>
    <Routes>
        <Route path="/"element={<Home/>}></Route>
       <Route path="/about"element={<About/>}></Route>
        <Route path="/product"element={<Product/>}></Route>
       <Route path="/blog"element={<Blog/>}></Route>
       <Route path="/gallery"element={<Gallery/>}></Route>
       <Route path="/contact"element={<Contact/>}></Route>
       <Route path="/Addcandidate" element={<Addcandidate/>}></Route>
       <Route path="/Stud" element={<Stud/>}></Route>
      
    </Routes>
    </>
}

export default Routesss;