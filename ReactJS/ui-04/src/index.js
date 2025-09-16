import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import reportWebVitals from './reportWebVitals';

//import App from './App';
//import  Basichome from './Basichome/Basichome';
//import Welcome from './Welcome/Welcome'
//import Homeb from './Homeb/Homeb';
//import  Home from './Page/Home/Home';
//import Product from  './Page/Product/Product';
//import Services  from './Page/Services/Services.';
//import Review from './Page/Review/Review';
//import Contact from './Page/Contact/Contact';
//import Blog from './Page/Blog/Blog';
//import About from './Page/About/About';
import Home  from './Pagess/Home/Home';
//import Home  from './PageDay7/Home/Home';
//import Home from './DemoS/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />
    <Basichome />
    <Welcome />
     <Home/>
    <Product />
    <Services/>
    <Review/>
    <Contact/>
    <Blog/>
    <About/>*/}
    <Home/>

   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
