
import Header from '../../ComponetWebPage/Header/Header';
import './About.css';
import Foodplate from '../../WebAssests/img/Food-Plate.png'

const About =()=>{
    return<>
      <Header/>
       <div className='Lee'>
        <img src={Foodplate}></img>
       </div>

       <div className='Rii'>
        <h1>About Us</h1>
        <h3>Why Choose us?</h3>
        <p>"
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, est. Doloremque 
                    sapiente veritatis laboriosam corrupti optio et maxime. Ad, amet explicabo eaque labore 
                    cupiditate quasi nostrum nemo recusandae id quibusdam? Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Doloremque ab, dolores pariatur cum exercitationem, illo nisi 
                    veritatis vitae ea deleniti fugiat quisquam tempora, accusantium corrupti excepturi optio. 
                    Inventore, cupiditate recusandae.
                "</p>
       </div>
        </>
    
}

export default About;