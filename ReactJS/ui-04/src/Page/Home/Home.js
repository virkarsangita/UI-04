import './Home.css';
import Header  from '../../Compoents/Header/Header';
import Footer from '../../Compoents/Footear/Footear';
import Course from '../../Compoents/Course/Course';
const Home=()=>{
    return<>
    <div className="header">
        <Header/>
    </div>

    <div className="body">
    Welcome TO Home Page
    </div>

    <div>
        <div className='coursesection'>
          
           
                <Course/>
           
        </div>
    </div>
    <div className="footer">
        <Footer/>
    </div>
    </>
}
export default Home;