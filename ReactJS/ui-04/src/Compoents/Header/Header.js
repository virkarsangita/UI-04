import './Header.css';
import logo from'../../Assests/images/DG-New-Logo.jpeg';
import { Link } from 'react-router-dom';

const Header =()=>{
    return<>
    <div className='leftsection'>
    <img src= {logo} className='logocss'/>
    </div>
    <div className='rightsection'>
        <ul className='Navbar1'>
            <li><Link to='/'>Home</Link></li>
             <li><Link to='/About'>About</Link></li>
             <li><Link to='/Services'>Services</Link></li>
             <li><Link to='/Product'>Product</Link></li>
             <li><Link to='/Blog'>Blog</Link></li>
             <li><Link to='/Gallery'>Gallery</Link></li>
             <li><Link to='/Review'>Review</Link></li>
             <li><Link to='/Contact'>Contact</Link></li>
             <li><Link to='/login'>login</Link></li>
             <li><Link to='/student_Details'></Link></li>
        </ul>
    </div>

    </>
}
export default Header;