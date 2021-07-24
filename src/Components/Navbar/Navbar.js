import React from 'react';
import './Navbar.css';
import { useHistory } from 'react-router-dom';



const Navbar = () => {
    const history = useHistory();
    return (
        <>
            <nav>
                <div className="left-portion-nav">
                    <p className="logo-nav">XYZ Co.</p>
                </div>
                <div className="right-portion-nav">
                    <div
                        className="tab-button-nav"
                        onClick={() => {
                            history.push("/signup")
                        }}
                    >
                        SIGNUP
                    </div>
                    <div
                        className="login-button-nav"
                        onClick={() => {
                            history.push("/login")
                        }}
                    >
                        LOGIN
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;