import Header from '../../WEBComponet/Header/Header.js';
import Footer from '../../WEBComponet/Footer/Footer';
import './Home.css';
const Home =()=>{
    return<>
    <div className="head">
    <Header/>
    </div>
    <div className="body"><h1>Welcome To Home</h1></div>
    <div className="foot">
        <Footer/>
    </div>
    </>
}

export default Home;