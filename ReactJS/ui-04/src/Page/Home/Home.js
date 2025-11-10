import './Home.css';
import Header from '../../Compoents/Header/Header';
import Footear from '../../Compoents/Footear/Footear';
import Course from '../../Compoents/Course/Course';

const Home=()=>{
    return<>
    <div className='header'>
        <Header/>
    </div>

    <div className='body'>
       <Course/>
    </div>

    <div className='footer'>
        <Footear/>
    </div>
    </>
}

export default Home;