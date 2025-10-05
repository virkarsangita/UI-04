import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './Routess.module.scss'
import Home from '../Page/Home/Home';
import About from "../Page/About/About";
import Services from "../Page/Services/Services";
import Product from "../Page/Product/Product";
import Blog from "../Page/Blog/Blog";
import Gallery from "../Page/Gallery/Gallery";
import Review from "../Page/Review/Review";
import Contact from "../Page/Contact/Contact";
import NotFound from "../NotFound/NotFound";
import Student_Details from "../Student_Details/Student_Details";

const Routess =()=>{
    return<>
   <Routes>
     <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path="/Product" element={<Product/>}/>
           <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Review' element={<Review/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/student_Details' element={<Student_Details/>}/>
              <Route path="*" element={<NotFound/>}></Route>
   </Routes>
    
    </>
}
export default Routess;