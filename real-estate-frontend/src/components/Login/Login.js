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
    <h2>Enter your credentials to access your account</h2>
    <form action="#" >
        <input className="input-box" type="email" placeholder="User Id" required />
       <input className="input-box" type="password" placeholder="password" required/>
    <button className="btn">Login</button>
    </form>
<Link to="/signup">
<button>SignUp</button>
</Link>
</section>

</div>
}
export default Login; 