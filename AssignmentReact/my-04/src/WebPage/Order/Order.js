
import Header from "../../ComponetWebPage/Header/Header";

const Order=()=>{
  return <>
      <Header />
      <h1>Welcome To Order</h1>
      <div className="container col-md-6">
      <div className="card">
        <div className="card-body">
          <form>
            <span>Name:</span>
            <input type="text" className="col-md-4"></input> <br></br><br></br>
            <span>Email:</span>
            <input type="email" className="col-md-4"></input> <br></br> <br></br>
            <span>Address :</span>
            <input type="text" className="col-md-4"></input><br></br> <br></br>
            <span>Phone no :</span>
            <input type="number" className="col-md-4"></input>
          </form>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
      </div>
      
    </>
}

export default Order;