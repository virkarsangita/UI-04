import './Header.css';
import logo from'../../Assests/images/DG-New-Logo.jpeg';
const Header =()=>{
    return<>
    <div className='leftsection'>
       <img src= {logo} className='logocss'/>
    </div>
    <div className='rightsection'>
        <ul className='Navbar1'>
            <li><a href='#'>Home</a></li>
             <li><a href='#'>About</a></li>
             <li><a href='#'>Service</a></li>
             <li><a href='#'>Product</a></li>
             <li><a href='#'>Blog</a></li>
             <li><a href='#'>Gallery</a></li>
             <li><a href='#'>Review</a></li>
             <li><a href='#'>Contact</a></li>
             <li><a href='#'>Login</a></li>
        </ul>
    </div>

    </>
}
export default Header;