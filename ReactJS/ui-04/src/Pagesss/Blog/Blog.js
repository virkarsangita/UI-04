import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../ComponetePagesss/Header/Header";
import { use } from "react";
function Blog(){
    const navigate=useNavigate();

    const location=useLocation();

    const redirect=()=>{
        navigate('/Addcandidate');
    }
    return<>
     <div>
        <Header/>
    </div>
    <h3>this is blog page</h3>

    <button className="btn btn-primary" onClick={() => redirect()}>click me</button>
    </>
}

export default Blog;