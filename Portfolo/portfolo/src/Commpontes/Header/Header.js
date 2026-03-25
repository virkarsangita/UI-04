import './Header.css';
import {Link} from 'react-router-dom';
function Header(){
    return<>
     <div className="container-fluid">
        <div className="Head">
            <div className="left"><h3>Portfolio</h3></div>

            <div className="right">
                  <ul className='navbar'>
                    <li><Link to="/">Home</Link></li>
                     <li><Link to="/About">About</Link></li>
                      <li><Link to="/Skills">Skills</Link></li>
                       <li><Link to="/Qulification">Qulification</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                  </ul>

                            </div>
        </div>
     </div>
    </>
}

export default Header;