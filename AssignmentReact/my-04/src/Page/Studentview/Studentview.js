import Header from '../../PageCompnet/Header/Header';
import Imag from '../../assests/images/user.jpg';
import './Studentview.css';

const Studentview=()=>{
    return<>
    <Header/>
    <h2 className='text-dark'>This is Student view</h2>

     
     <div className='container  Card'> 
        <div className='card'>
            <div className='card-body shadow'>
                <input type='text' className=' DEMO form-control shadow' placeholder='search'/> <button className='BBtn'>search</button>

                <div className='row'>
                    <div className='col-md-6'>
                        <img src={Imag} className='Immag'></img>
                    </div>
                    <div className='col-md-6 TEXT'>
                        <p>Full Name:   Daisy Parks</p>
                        <p>Deparment:   Computer Science</p>
                        <p>Mobile:      4326372812</p>
                        <p>Email:       Daisy@gmail.com</p>
                        <p>Gender:      Male</p>
                        <p>DOB:         22 Apr 1995</p>

                    </div>
                </div>

                  <button className='bttn btn-success'> Update</button>
                  <button className='btttn btn-danger'>Delete</button>
                
            </div>
        </div>
         <h4 className='text-dark'>Copyright © 2020 Pentasafe.</h4>
     </div>

     
    </>
}
export default Studentview;