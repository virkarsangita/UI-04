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
            <li><link to='/'>Home</link></li>
             <li><link to='/About'>About</link></li>
             <li><link to='/Services'>Services</link></li>
             <li><link to='/Product'>Product</link></li>
             <li><link to='/Blog'>Blog</link></li>
             <li><link to='/Gallery'>Gallery</link></li>
             <li><link to='/Review'>Review</link></li>
             <li><link to='/Contact'>Contact</link></li>
             <li><link to='/Login'>Login</link></li>
        </ul>
    </div>

    </>
}
export default Header;