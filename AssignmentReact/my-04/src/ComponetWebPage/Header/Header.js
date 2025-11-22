import { Link } from 'react-router-dom';
import './Header.css';
import Foodlogo from '../../WebAssests/Logo/foodie_Logo_pos-768x275.png'
import search from '../../WebAssests/Logo/Screenshot 2025-10-30 110852.png';
const Header=()=>{
    return<>
    <div className='left'>
        <img src={Foodlogo}></img>
    </div>

    <div className='medi'>
        <ul className='navbar1'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Menu'>Menu</Link></li>
            <li><Link to='/Gallery'>Gallery</Link></li>
            <li><Link to='/Review'>Review</Link></li>
            <li><Link to='/Order'>Order</Link></li>
        </ul>
    </div>

    <div className='right'>
        <img src={search}></img>
    </div>
    </>
}

export default Header;