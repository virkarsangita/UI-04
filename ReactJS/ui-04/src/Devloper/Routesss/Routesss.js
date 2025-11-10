
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Course from "../Course/Course";
import Contact from "../Contact/Contact";
import Product from "../Product/Product";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import NotFound from '../../NotFound/NotFound'
import StudentDetails from "../../DevComponents/StudentDetails/StudentDetails";



const Routesss = () => {
  return (
     <>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Course" element={<Course/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/StudentDetails" element={<StudentDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>
        
        
  );
};

export default Routesss;
