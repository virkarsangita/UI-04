import { useNavigate } from 'react-router-dom';
import style from './AddCandiate.module.scss'
const Addcandiate=()=>{

    const navigate=useNavigate();
  
    const redirtpageback=()=>{
        const navigationurl=localStorage.getItem('redirtpage');
        navigate(navigationurl);
    }
    return<>
    
    <h1> Add AddCandiate page</h1>

    <button className={style.Bttn} onClick={redirtpageback}>Back</button>
    <button className={style.Bttn} >Continue</button>
    </>

}

export default Addcandiate;