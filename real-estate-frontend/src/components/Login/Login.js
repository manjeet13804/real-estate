import "../SignUp/SignUp.css"
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import PropertyLogo from "../../Images/real-estate.jpg"
import axios from 'axios';


const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        let DATA = {
            email: email,
            password: password
        }
        localStorage.setItem('userId', DATA.email)
        axios.post('http://localhost:5000/api/user/login', DATA)
            .then(function (response) {
                console.log(response.data.message);
                if (response.data.message === "success") {
                    localStorage.setItem('token', response.data.token)
                    navigate("/dashboard");
                }
                else {
                    alert(response.data.message)
                    // navigate("/dashboard");
                   
                }
            })
            .catch(function (error) {
                console.log(error);
                alert('error')
            });
    }

    return <div className="main-box">
        <section className="information">
            <img src={PropertyLogo} alt="LOGO" />
            <p className="login-para">Enter your credentials to access your account</p>
            <form method="POST" >
                <input className="input-box" type="email" placeholder="User Id" required name="email"   
                 onChange={(e) => {
                                setEmail(e.target.value)
                            }} /><br />

                <input className="input-box" type="password" placeholder="password" required name="password"      
                onChange={(e) => {
                                setPassword(e.target.value)
                            }}/>
                            <br />
                <button className="btn"  onClick={login}>Login</button>
            </form>
            <Link to="/signup">
                <div className="signup-link">Sign Up</div>
            </Link>
        </section>

    </div>
}
export default Login; 
