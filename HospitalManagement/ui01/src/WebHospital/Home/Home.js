import Header from "../../WebHospitalComponts/Header/Header";
import './Home.css';
import imgg from '../../WebHospitalassests/Img/Hospital-Management-System.jpg';
function Home(){
    return<>

    <div>
        <Header/>
    </div>

        <div className="container-fuild ">
           
                <div className="aa" >
                <img src={imgg}></img>
                </div>
            </div>

    </>
}
export default Home;