import './Home.css';
import Header from'../../ComponetWebPage/Header/Header';
import Footear from'../../ComponetWebPage/Footear/Footear';
import Main from '../../WebAssests/img/main_img.png';

const Home=()=>{
    return<>
    <div>
        <Header/>
    </div>

    <div className='bodysection'>
       <div className='Le'>
        <h1>Get Fresh
            
            <span>Food</span>
            <br/>
            in a Easy Way
        </h1>

        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reiciendis quaerat nobis 
            deleniti amet non inventore. Reprehenderit recusandae voluptatibus minus tenetur itaque numquam 
            cum quos dolorem maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur adipisicing 
            elit. Cumque facilis, quaerat cupiditate nulla quibusdam quo sunt esse tempore inventore vel 
            voluptate, amet laudantium adipisci veniam nihil quam molestiae omnis mollitia.
        </p>
         <button className='bttn'>Order Now</button>
       </div>

      
       <div className='Re'>
        <img src={Main}></img>
       </div>
    </div>

    <div>
        <Footear/>
    </div>
    </>
}

export default Home;