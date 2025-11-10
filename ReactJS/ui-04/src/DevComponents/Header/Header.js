import './Header.css';
import logo from '../../Assests/images/DG-New-Logo.jpeg'
import { Link } from 'react-router-dom';
const Header=()=>{
    return<>
   <div className='container-fluid'>
    <div className='row'>
        <div className='left'>
        <img src={logo} className='logocss'></img>
        </div>
        <div className='right'>
            <ul className='Navbar'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>

                <div>
                    <li><Link to='/Course' className="dropdown-toggle" data-bs-toggle="dropdown">Course</Link>
                    <div className='dropdown '>
                    <ul className='dropdown-menu'>
                        <li><a className='dropdown-menu' href='#'>Html</a></li>
                         <li><a className='dropdown-item' href='#'>Css</a></li>
                          <li><a className='dropdown-item' href='#'>Bootstrap</a></li>
                          <li><a className='dropdown-item' href='#'>JS</a></li>
                          <li><a className='dropdown-item' href='#'>React</a></li>
                          
                    </ul>
                </div>
                </li>
                </div>




                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Product'>Product</Link></li>
                <li><Link to='/Blog'>Blog</Link></li>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/Register'>Register</Link></li>
                <li><Link to='/StudentDetails'></Link></li>
                
            </ul>
        </div>
    </div>
   </div>
    </>
}

export default Header;