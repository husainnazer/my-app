import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { FiArrowLeft } from "react-icons/fi";

const Login = () => {

    const history = useHistory();

        return (
            <>
                <FiArrowLeft
                    onClick={() => {
                        history.push("/")
                    }}
                    size="30px"
                    className="goback-button-login"
                />
                <div className="login-container">
                    <p className="login-header">Login</p>
                    <div className="login-email-input-container">
                        <label>Email</label>
                        <input
                            onKeyPress={(e) => {
                                if(e.key === 'Enter') {
                                    document.getElementById('login-password-input').focus()
                                }
                            }}
                            className="login-email-input"
                        />
                    </div>
                    <div className="login-password-input-container">
                        <label>Password</label>
                        <input
                            id='login-password-input'
                            className="login-password-input"
                            type="password"
                        />
                    </div>
                    <div className="login-button-container-onlogin">
                            <div
                                className="login-button-onlogin"
                            >
                                LOGIN
                            </div>
                    </div>
                    <div
                        onClick={() => history.push("/signup")}
                        className="register-link-onlogin"
                    >
                        <p>Don't have an account ? </p>
                        &nbsp;
                        <p className="seperate-color">Register</p>
                    </div>
                </div>
            </>
        );
};

export default Login;
