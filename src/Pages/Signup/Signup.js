import React from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import { FiArrowLeft } from "react-icons/fi";

const Signup = () => {
    
    const history = useHistory();

        return (
            <>
                <FiArrowLeft
                    onClick={() => {
                        history.push("/login")
                    }}
                    size="30px"
                    className="goback-button-login"
                />
                <div className="login-container">
                    <p className="login-header">Register</p>
                    <div className="login-email-input-container">
                        <label>Name</label>
                        <input
                            onKeyPress={(e) => {
                                if(e.key === 'Enter') {
                                    document.getElementById('signup-email-input').focus()
                                }
                            }}
                            className="login-email-input"
                        />
                    </div>
                    <div className="login-email-input-container">
                        <label>Email</label>
                        <input
                            id='signup-email-input'
                            onKeyPress={(e) => {
                                if(e.key === 'Enter') {
                                    document.getElementById('signup-password-input').focus()
                                }
                            }}
                            className="login-email-input"
                        />
                    </div>
                    <div className="login-password-input-container">
                        <label>Password</label>
                        <input
                            id='signup-password-input'
                            className="login-password-input"
                            onKeyPress={(e) => {
                                if(e.key === 'Enter') {
                                    document.getElementById('signup-confirm-password-input').focus()
                                }
                            }}
                            type="password"
                        />
                    </div>
                    <div className="login-password-input-container">
                        <label>Confirm Password</label>
                        <input
                            id='signup-confirm-password-input'
                            className="login-password-input"
                            type="password"
                        />
                    </div>
                    <div className="login-button-container-onlogin">
                        <div
                            className="login-button-onlogin"
                        >
                            REGISTER
                        </div>
                    </div>
                    <div
                        onClick={() => history.push("/login")}
                        className="register-link-onlogin"
                    >
                        <p>Already have an account ? </p>
                        &nbsp;
                        <p className="seperate-color">Login</p>
                    </div>
                </div>
            </>
        );

};

export default Signup;
