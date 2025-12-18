import Docli from '../../WebHospitalassests/Img/Doclinic-Medical-Bootstrap-Admin-Dashboard.jpg'
import Header from '../../WebHospitalComponts/Header/Header';

const Dashboard = () => {
  return <>
    <div>
      <Header/>
    </div>
    
    <div>
      <img src={Docli} style={{height:'600px',width:'100%',float:'left'}}></img>
    </div>
 </>
};

export default Dashboard;