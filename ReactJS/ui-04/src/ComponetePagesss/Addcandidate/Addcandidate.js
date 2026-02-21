import { useNavigate } from "react-router-dom";

const Addcandidate=()=>{

    const navigate=useNavigate();

    const back=()=>{
        console.log('back button clicked');
        navigate('/About');
    }

    const Continue=()=>{
        console.log('continue button clicked')
        navigate('/Product')
    }
    return<>
    
    <p>please Add your candidate here</p>

    <button className="btn btn-danger" onClick={() => back()}>Back</button>
    <button className="btn btn-primary" onClick={()=> Continue()}>continue</button>
    </>
}

export default Addcandidate;