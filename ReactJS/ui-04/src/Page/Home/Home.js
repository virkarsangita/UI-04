import './Home.css';
import Header from '../../Compoents/Header/Header';
import Footer from '../../Compoents/Footear/Footear'
const Home=()=>{
    return<>
    <div className="header">
        <Header/>
    </div>

    <div className="body">
         Welcome TO Home Page
    </div>
    
    <div className="footer">
        <Footer/>
    </div>
    </>
}
export default Home;