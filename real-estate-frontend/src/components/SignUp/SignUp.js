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
    <h2>Create New Account</h2>
    <form action="#" >
        <input className="input-box" type="email" placeholder="Mail Id" required />
       <input className="input-box" type="password" placeholder="password" required/>
       <input className="input-box" type="password" placeholder="Confirm password" required/>
    <button className="btn">Sign up</button>
    </form>
</section>

</div>
}
export default SignUp; 