import './Home.css';
import Header from '../../PageCompontDay7/Header/Header';
import Footear from '../../PageCompontDay7/Footear/Footear';
import  Course from '../../PageCompontDay7/Course/Course';



const Home =()=>{
    return<>

    <div className='headersection'>
        <Header/>
    </div>

    <div className='bodysection'>
        Welcome To Home Page
        </div>

       <div className='coursSection'>
        <div className='leftcoursesection'>
            <h4>Our Section</h4>
        </div>
        <div className='rightcoursesection'>
            <Course/>
        </div>
        
    </div>

    <div className='footearsection'>
        <Footear/>
    </div>

    </>
}
export default Home;