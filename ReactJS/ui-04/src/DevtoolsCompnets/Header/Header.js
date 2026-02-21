import './Header.css';
import { Link } from "react-router-dom";

const Header=()=>{
    return<>
    <div className="A"></div>



    <div className="B">
        <ul className='Navbar1'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/Product'>Product</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <li><Link to='/Login'>Login</Link></li>
        </ul>
    </div>
    </>
}

export default  Header;