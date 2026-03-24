import { use, useEffect } from "react"
import Header from "../../DevtoolsCompnets/Header/Header"

const Product=()=>{
    const clickme=()=>{
        console.log('clicked*********')
    }

    useEffect(()=>{
        console.log('calling use effect**********');

        clickme();
    })
    return<>

    <div>
        <Header/>
    </div>
    <h1>Welcome To Product</h1>

    <button className="btn btn-danger" >View</button>
    </>
}

export default Product;