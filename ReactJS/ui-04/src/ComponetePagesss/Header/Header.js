import { Link } from 'react-router-dom';
import './Header.css';
function Header(){
    return<>
    
    

    <div className='A'>
        <p>imges added</p>
    </div>

    <div className='B'>
        <ul className='Nabars'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/product'>Product</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/Stud'></Link></li>
        </ul>
    </div>
    </>
}

export default Header;