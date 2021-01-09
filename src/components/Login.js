import { useState } from 'react';
import Logo from '../assets/logo.png';
import '../css/Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        console.log(email);
        console.log(password);
        e.preventDefault();
    }

    
    return (
        <div className="login-container">
            <div className="login-title-container">
                <img src={Logo} alt="tutor-time-logo" className="login-icon"/>
                <h1 className="login-title">TUTOR TIME</h1>
                <p className="login-description">Tutor Time helps you learn and love the people in your life.</p>
            </div>
            <div className="login-form-container">
                <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="email" className="login-label">Email:</label>
                    <input placeholder="Email" type="text" id="email" 
                    className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password" className="login-label">Password:</label>
                    <input placeholder="Password" type="password" id="password" 
                    className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="login-button">Submit</button>
                </form>
            </div> 
            {/* <p className="login-alternative-background">TutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTimeTutorTime</p>        */}
        </div>
    );

}

export default Login;

