import { Link } from "react-router-dom";
import './Header.css';
function Header(){
    return<>
        <div className="A">
            <ul className="Naa">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/patients'>Patients</Link></li>
                <li><Link to='/doctors'>Doctors</Link></li>
                <li><Link to='/appointments'>Appointments</Link></li>
                <li><Link to='/reports'>Reports</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
            </ul>
        </div>
    </>
}

export default Header;