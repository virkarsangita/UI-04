import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../ComponetePagesss/Header/Header";
function Gallery(){
    const location=useLocation();

    const navigate=useNavigate();

    const redirect=()=>{
        navigate('/Addcandidate');
    }
    return<>
     <div>
        <Header/>
    </div>
    <h3>this is gallery page</h3>

    <button className="btn btn-primary" onClick={() => redirect()}>Add candidate</button>
    </>
}

export default Gallery;