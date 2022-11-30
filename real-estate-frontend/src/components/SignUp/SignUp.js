import "./SignUp.css"
import { useState } from "react";
import PropertyLogo from "../../Images/real-estate.jpg"
const SignUp = ()=>{
const [data,setData]=useState({
    email:"",
    password:"",
    confirmpassword:""
})
return <div className="main-box">
<section className="information">
    <img src={PropertyLogo} alt="LOGO"/>
    <p className="signup-para">Create New Account</p>
    <form action="#"className="form" >
        <input className="input-box" type="email" placeholder="Mail Id" required /><br/>
       <input className="input-box" type="password" placeholder="password" required/><br/>
       <input className="input-box" type="password" placeholder="Confirm password" required/>
    <button className="btn">Sign up</button>
    </form>
</section>

</div>
}
export default SignUp; 