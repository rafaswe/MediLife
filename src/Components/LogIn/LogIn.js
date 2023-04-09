import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const LogIn = () => {
    const { signInUsingGoogle, processLogin, error } = useAuth();
    const [userEmail, setUserEmail] = useState('');
    const [userPassowrd, setUserPassowrd] = useState('');
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }


    const handleLogInEmailChange = (event) => {
        setUserEmail(event.target.value);
    }
    const handleLogInPasswordChange = (event) => {
        setUserPassowrd(event.target.value);
    }


    return (
        <div className="form-style my-5 pt-5">
            <div className="form-color text-center">
                <h2 className="text-center custom-header-text-color">Log in</h2>
                <form className="text-center">
                    <input onBlur={handleLogInEmailChange} className="w-100 rounded rounded-3" type="text" placeholder="Your Email" />
                    <br />
                    <input onBlur={handleLogInPasswordChange} className="w-100 rounded rounded-3" type="password" name="" id="" placeholder="Type your Password" /> <br />
                    <input className="border border-0 px-3 py-2 bg-primary text-light rounded rounded-3" type="submit" value="Submit" onClick={() => processLogin(userEmail, userPassowrd)} /> <br />
                </form>
                <p>{error}</p>
                <p className="my-3 text-center">Don't Have any Account? <Link to="/register">Create a new account</Link></p>
                <div className="text-center">
                    <div>or Sign Up With</div>
                    <br />
                    <button
                        className="btn btn-success rounded rounded-3"
                        onClick={handleGoogleLogIn}
                    >Google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;