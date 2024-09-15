import { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import '../styles/Login.css';  
import facbook from '../assets/download.jpeg';
import twitter from '../assets/twitter.jpeg';
import pinterest from '../assets/pinterest.jpeg';
import linkedin from '../assets/linkedin.jpeg';


function Login() {  
    const [userId, setUserId] = useState('');  
    const [password, setPassword] = useState('');  
    const navigate = useNavigate();  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        const trimmedUserId = userId.trim();  
        const trimmedPassword = password.trim();  
        console.log(trimmedUserId, trimmedPassword);  

        if (trimmedUserId === 'user' && trimmedPassword === 'password') {  
            navigate('/home');  
        } else {  
            alert('Invalid credentials. Please use "user" as UserID and "password" as Password.');  
        }  
    };  

    return (  
        <div className="login-container">  
            <h1>Fruit.ai</h1>  
            <form onSubmit={handleSubmit}>  
                <input  
                    type="text"  
                    placeholder="Email Address"  
                    value={userId}  
                    onChange={(e) => setUserId(e.target.value)}  
                    required  
                />  
                <input  
                    type="password"  
                    placeholder="Password"  
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}  
                    required  
                />  
                
                <button type="submit">Login</button>  
            </form>  
            <div className="social-login">  
                <p>or connect with</p>  
                <img src={facbook} alt="Facebook" />  
                <img src={twitter} alt="Twitter" />  
                <img src={pinterest} alt="Pinterest" />  
                <img src={linkedin} alt="LinkedIn" />  
            </div>  
            <div className="footer">  
               
            </div>  
        </div>  
    );  
}  

export default Login;