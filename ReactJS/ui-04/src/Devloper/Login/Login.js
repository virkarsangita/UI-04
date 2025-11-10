import "./Login.css";
import Header from "../../DevComponents/Header/Header";
import { useState } from "react";

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Header />
      <h2>Login web pages.</h2>
      <button className="btn btn-warning" onClick={() => setShowForm(true)}>
        click here....
      </button>
      <br></br>
      {showForm && <LoginForm />}
    </>
  );
};

function LoginForm() {
  return (
    <div className="container">
      <div className="card shadow">
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Login Form</h2>

          <form>
            <input type="text" placeholder="Username" />
            <br />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <br />
            <button type="submit">Login</button>
            <br></br>
          </form>

          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Login;
