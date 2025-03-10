import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const alertPopUp = (e) => {
        e.preventDefault();
        if (currState === "Sign Up") {
            alert("Account Created Successfully!");
            setShowLogin(false);
            
        }
        else {
            alert("Logged In Successfully!");
            setShowLogin(false);
        }
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={alertPopUp}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross-icon" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <div className="login-popup-name login-popup-details">
                            <p>Name</p>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                    )}
                    <div className="login-popup-email login-popup-details">
                        <p>E-mail</p>
                        <input 
                            type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="login-popup-password login-popup-details">
                        <p>Password</p>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Sign Up" ? (
                    <p className='question'>Already have an account? 
                        <span onClick={() => setCurrState("Login")}> Login here</span>
                    </p>
                ) : (
                    <p>Create a new account? 
                        <span onClick={() => setCurrState("Sign Up")}> Click here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
