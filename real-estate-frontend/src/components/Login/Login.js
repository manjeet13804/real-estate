import "../SignUp/SignUp.css"
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import PropertyLogo from "../../Images/real-estate.jpg"
import axios from 'axios';


const Login = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        email: "",
        password: "",
    })

const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:data.value})
    
}
const handleSubmit = async(e) =>{
    e.preventDefault();

    try{
        const url = "http://localhost:5000/api/user/login"
        const {data:res} = await axios.post(url,data)
        localStorage.setItem("token",res.data)
        // windows.location('/')
        navigate('/dashboard')
        console.log (res.message)
    }
    catch(error){
        alert("Enter valid crendentials")
    }

}


    return <div className="main-box">
        <section className="information">
            <img src={PropertyLogo} alt="LOGO" />
            <p className="login-para">Enter your credentials to access your account</p>
            <form action="#" onSubmit={handleSubmit} >
                <input className="input-box" type="email" placeholder="User Id" required name="email" value={data.email} onChange={handleChange} /><br />
                <input className="input-box" type="password" placeholder="password" required name="password" value={data.password}  onChange={handleChange}/><br />
                <button className="btn">Login</button>
            </form>
            <Link to="/signup">
                <div className="signup-link">Sign Up</div>
            </Link>
        </section>

    </div>
}
export default Login; 