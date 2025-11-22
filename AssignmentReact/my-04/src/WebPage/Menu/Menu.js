import Header from "../../ComponetWebPage/Header/Header";
import './Menu.css';
import burger from '../../WebAssests/img/buger.jpg';
import pasta from '../../WebAssests/img/pasta.jpg';
import lasagna from '../../WebAssests/img/lasagna.webp';
import drink from '../../WebAssests/img/chocolate_Drink.jpg';
import pizza from '../../WebAssests/img/pizza.jpg';
import hotdog from '../../WebAssests/img/Hot_dog.jpg';
import juse from '../../WebAssests/img/juse.jpg';
import briyani from '../../WebAssests/img/biryani.webp';
const Menu=()=>{
    return<>
      <Header/>
         
         <div className="m">
          <h1>Our <span>Menu</span></h1>
         </div>

         <div className='container'>
          <div className="row">
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-header" style={{backgroundColor:'white'}}>
                      <img src={burger} style={{height:200,width:230}} ></img>
                  </div>
                   <div className="card-body">
                    <span style={{color:"orange",textAlign:"center",fontSize:20,fontStyle:'inherit',fontWeight:500}}>Burger</span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                    </p>
                    <button className="bttn ">Order Now</button>
                   </div>
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-header">
                     <img src={pasta} style={{height:200 , width:230}}></img>
                  </div>
                  <div className="card-body">
                     <span style={{color:"orange",textAlign:"center",fontSize:20,fontStyle:'inherit',fontWeight:500}}>pasta</span>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                    </p>

                    <button className="bttn">Order Now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-header">
                    <img src={lasagna} style={{height:200,width:230}}></img>
                    
                  </div>
                  <div className="card-body">
                    <span style={{color:"orange",textAlign:"center",fontSize:20,fontStyle:'inherit',fontWeight:500}}>lasagna</span>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                    </p>

                    <button className="bttn">Order Now</button>
                  </div>
                </div>
              </div>
            <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-header">
                    <img src={drink} style={{height:200,width:230}}></img>
                  </div>
                  <div className="card-body">
                    <span style={{color:"orange",textAlign:"center",fontSize:20,fontStyle:'inherit',fontWeight:500}}>Drink</span>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                    </p>

                    <button className="bttn">Order Now</button>
                  </div>
                </div>
              </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
                <div className="card shadow">
                   <div className="card-header">
                    <img src={pizza} style={{height:200,width:230}}></img>
                   </div>
                  <div className="card-body">
                    <span style={{color:"orange",textAlign:"center",fontSize:20,fontStyle:'inherit',fontWeight:500}}>Hot Dog</span>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                    </p>

                    <button className="bttn">Order Now</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow">
                   <div className="card-header">
                     <img src={hotdog} style={{height:200,width:230}} ></img>
                   </div>
                  <div className="card-body">
                    <span style={{color:"orange",textAlign:"center",fontSize:20,fontStyle:'inherit',fontWeight:500}}>Hot Dog</span>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                    </p>

                    <button className="bttn">Order Now</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow">
                   <div className="card-header">
                     <img src={juse} style={{height:200,width:230}} ></img>
                   </div>
                  <div className="card-body">
                    <span style={{color:"orange",textAlign:"center",fontSize:20,fontStyle:'inherit',fontWeight:500}}>Juse</span>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                    </p>

                    <button className="bttn">Order Now</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card shadow">
                   <div className="card-header">
                    <img src={briyani} style={{height:200,width:230}} ></img>
                   </div>
                  <div className="card-body">
                    <span style={{color:"orange",textAlign:"center",fontSize:20,fontStyle:'inherit',fontWeight:500}}>Biryani</span>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                    </p>

                    <button className="bttn">Order Now</button>
                  </div>
                </div>
              </div>
          </div>
         </div>
        
    </>
}

export default Menu;