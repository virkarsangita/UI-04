import './Header.css';
import logo from '../../assests/images/DG-New-Logo.jpeg';
import { Link } from 'react-router-dom';
const Header=()=>{
    return<>

        <div className='left'>
        <img src={logo} className='textCSS'></img>
         <ul className='navbarA'>
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='/Studentlist'>Student List</Link></li>
            <li><Link to='/studentview'>Student View</Link></li>
            <li><Link to='/StudentAdd'>Student Add</Link></li>
            <li><Link to='/StudentEdit'>Student Edit</Link></li>
            <li><Link to='/Importlist'>Import List</Link></li>
            <li><Link to='/Exportlist'>Export List</Link></li>
            </ul>
        </div>
        <div className='right'></div>
    
    
    </>
}
export default Header;