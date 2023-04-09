import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { createNewUser, handleResetPassord, error, setError } = useFirebase();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passowrd, setPassowrd] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassowrd(event.target.value);
    }

    const handleRegistration = event => {
        event.preventDefault();

        if (passowrd.length < 6) {
            setError('Password musst be 6 chareaacter long at least')
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(passowrd)) {
            setError('Password must contrain 2 uppercase')
            return;
        }

        createNewUser(email, passowrd);
        history.push(redirect_url)

    }

    return (
        <div className="form-style my-5 pt-5">
            <div className="form-color text-center">
                <h2 className="text-center custom-header-text-color">Register</h2>
                <form onSubmit={handleRegistration}>
                    <div className="row mb-3 align-items-center">
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="w-100 form-control  rounded rounded-3 p-2" id="inputAddress" placeholder="Username" />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-sm-10">
                            <input type="email" onBlur={handleEmailChange} className="w-100 form-control  rounded rounded-3 p-2" id="inputEmail3" placeholder="Enter Your Email" required />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="w-100 form-control  rounded rounded-3 p-2" id="inputPassword3" placeholder="Give Password" required />
                        </div>
                    </div>

                    <div className="text-danger mb-2">{error}</div>
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary me-2">Register</button>
                        <button type="button" onClick={() => handleResetPassord(email)} className="btn btn-secondary ">Reset Password</button>
                    </div>
                    <p className="my-3 text-center">Already Have an Account? Then <Link to="/login">Log in</Link></p>
                </form>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Register;