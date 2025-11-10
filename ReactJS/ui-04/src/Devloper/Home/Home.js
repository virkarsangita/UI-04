import './Home.css';
import Header from '../../DevComponents/Header/Header';
import Footear from '../../DevComponents/Footear/Footear';
const Home=()=>{
    return<>
    <div >
        <Header/>
   
    </div>

    <div className='body'>
        Welcome to developer guru website
        <h1>Body Section</h1>
    </div>

    <div>
        <Footear/>
    </div>
    </>
}
export default Home;
