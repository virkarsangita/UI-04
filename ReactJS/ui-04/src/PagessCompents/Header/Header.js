import './Header.css'
import logo from '../../Assests/images/DG-New-Logo.jpeg'


const Header =({name ,name1 , name2})=>{
    console.log(name2 );
    return<>
    <h1 className='textcss'>Welcome To {name} , {name1}</h1>
    <img src={logo}></img>

    <h4>Welcome To : {name2 [2]}</h4>
    </>
}
export default Header;