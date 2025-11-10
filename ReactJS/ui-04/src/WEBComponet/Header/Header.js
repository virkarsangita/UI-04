import { Link } from "react-router-dom";
import './Header.css'
const Header =()=>{
    return<>
    <div className="let">
    <ul className="Navbar1">
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Product'>Product</Link></li>
        <li><Link to='/Course' >Course</Link></li>
        <li><Link to='/Notfound'>Login</Link></li>
        <li><Link to='/Studentdetails'>Studentdetails</Link></li>
    </ul>
    </div>
    </>
}

export default Header;