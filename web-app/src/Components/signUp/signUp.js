import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './signUp.scss';

function SignUp() {
    
    const [loginReg, setLoginReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [requestStatus, setRequestStatus] = useState('')

    const register = () => {

        Axios
            .post('http://localhost:8000/api/users/', {
                login: loginReg,
                password: passwordReg,
            })
            .then((response) => {
                setRequestStatus(response.statusText);
            })
            .catch((error) => {
                setRequestStatus(error.response.data.login[0]);
            })
    }

    return(
        <div className='sign-up-component'>
            <div className='sign-up-wrapper'>
                <span className="info-requirement">Введите данные для регистрации</span> 
                    <div className="inputs">
                        <div className="login input">
                            <label>Login: </label>
                            <input 
                                type="text" 
                                className="reg-input" 
                                placeholder="Login" 
                                required 
                                onChange={(e) => {
                                    setLoginReg(e.target.value)
                                }}
                            />
                        </div>
                            <div className="password input">
                                <label>Password: </label>
                                <input 
                                    type="password" 
                                    className="reg-input" 
                                    placeholder="Password" 
                                    required 
                                    autocomplete="current-password" 
                                    onChange={(e) => {
                                        setPasswordReg(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="repeat-password input">
                                <label>Password again: </label>
                                <input type="password" className="reg-input" placeholder="Password Again" autocomplete="current-password" />
                            </div>
                    </div>
                    <div className="buttons">
                        <div className="cancel-button">
                            <Link to='/'>
                                <button class="in-button button-not-active">Cancel</button> 
                            </Link>
                        </div>
                        <div className="right-buttons">
                            <div className="back-button">
                                <button class="in-button button-not-active">Back</button> 
                            </div>
                            <div className="signin-button">
                                <button class="in-button" onClick={register}>Sign Up</button> 
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default SignUp