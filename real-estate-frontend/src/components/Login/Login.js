import "../SignUp/SignUp.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import PropertyLogo from "../../Images/real-estate.jpg"
const Login = ()=>{
const [data,setData]=useState({
    email:"",
    password:"",
})
return <div className="main-box">
<section className="information">
    <img src={PropertyLogo} alt="LOGO"/>
    <p className="login-para">Enter your credentials to access your account</p>
    <form action="#" >
        <input className="input-box" type="email" placeholder="User Id" required /><br/>
       <input className="input-box" type="password" placeholder="password" required/><br/>
    <button className="btn">Login</button>
    </form>
<Link to="/signup">
<div className="signup-link">Sign Up</div>
</Link>
</section>

</div>
}
export default Login; 