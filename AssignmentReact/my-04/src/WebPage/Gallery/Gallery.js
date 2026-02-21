import Header from "../../ComponetWebPage/Header/Header";

import gallery from '../../WebAssests/img/gallary_1.jpg'
import gallery1 from '../../WebAssests/img/gallary_2.jpg'
import gallery2 from '../../WebAssests/img/gallary_3.jpg'
import gallery3 from '../../WebAssests/img/gallary_4.jpg'
import gallery4 from '../../WebAssests/img/gallary_5.jpg'
import gallery5 from '../../WebAssests/img/gallary_6.jpg';

const Gallery=()=>{
    return<>
      <Header/>
       
       <h1 style={{color:'orange'}}>Our
             <span style={{color:'black'}}> Gallery</span>
       </h1>

    <div className="container col-md-12 mt-3">
      <div className="row">
        <div className="col-md-4">
          <div  className="card">
            <img src={gallery}></img>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
             <img src={gallery1}></img>
          </div>
        </div>

         <div className="col-md-4">
          <div className="card">
             <img src={gallery2}></img>
          </div>
        </div>
      </div>

      </div>

       <div className="container col-md-12 mt-3">
      <div className="row ">
        <div className="col-md-4">
          <div className="card">
            <img src={gallery3}></img>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={gallery4}></img>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={gallery5}></img>
          </div>
        </div>
      </div>

    </div>
    </>
}

export default Gallery;