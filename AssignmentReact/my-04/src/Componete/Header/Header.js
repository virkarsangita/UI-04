import './Header.css';
import logo from '../../assests/images/DG-New-Logo.jpeg';

const Header=()=>{
    return<>
    <div className='leftsection'>
      
      <img src={logo} className='textCss'></img>

    </div>

    <div className='rightsection'>
        <ul className='NavbarA'>
            <li><a href='#'>Home</a></li>
             <li><a href='#'>About</a></li>
              <li><a href='#'>Course</a></li>
               <li><a href='#'>Placement</a></li>
                <li><a href='#'>Student Feedback</a></li>
                 <li><a href='#'>Blog</a></li>
                  <li><a href='#'>Contact</a></li>
        </ul>

        <button className='btn  btn-primary m-2 p-2'>Registration</button>
    </div>
    </>
}

export default Header;