import logo from './logo.svg';
import './App.css';
import Home from './Webpage/Home/Home';
import About from './Webpage/About/About';
import Skills from './Webpage/Skills/Skills';
import Qualification from './Webpage/Qulification/Qulification';
import Contact from './Webpage/Contact/Contact';
import {  Routes, Route } from "react-router-dom";

function App() {
  return <>
  
  <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/About' element={<About/>}></Route>
   <Route path='/Skills' element={<Skills/>}></Route>
   <Route path='/Qulification' element={<Qualification/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>
   
  </Routes>
  
  </>
}

export default App;
