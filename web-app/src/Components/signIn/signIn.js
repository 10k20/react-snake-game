import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import './signIn.scss';

const SignIn = (props) => {
    
    const history = useHistory()
    const [loginDataStatus, setLoginDataStatus] = useState('')

    const login = (event) => {
        event.preventDefault();
        let usernameLogin = event.target.elements.login.value
        let usernamePassword = event.target.elements.password.value

        Axios
            .get(`http://localhost:8000/api/users/?login=${usernameLogin}&password=${usernamePassword}`)
            .then((response) => {
                if (response.data.length !== 0) {
                    setLoginDataStatus('Success..')
                    props.setAuthLogin(usernameLogin)
                    props.setAuthStatus(true)
                    history.push('/')       
                }
                else {
                    setLoginDataStatus('Login or password are wrong')
                }
            })
    }

    return (
        <div className='sign-in-component'>
            <form className='sign-in-wrapper' onSubmit={login}>
                <span className="info-requirement">Введите данные для входа </span> 
                    <div className="inputs">
                        <div className="login input">
                            <label>Login: </label>
                            <input 
                                type="text" 
                                className="reg-input" 
                                placeholder="Login" 
                                required 
                                name="login"
                                autoComplete="username"
                                maxLength="20"
                                minLength="4"
                            />
                        </div>
                            <div className="password input">
                                <label>Password: </label>
                                <input 
                                type="password" 
                                className="reg-input" 
                                placeholder="Password" 
                                autoComplete="current-password" 
                                required
                                name='password'
                                maxLength="32"
                                minLength="8"
                            />
                            </div>
                    </div>
                    <h6 className="sign-in-status">
                        { loginDataStatus }
                    </h6>
                    <div className="no-account">
                        <h6>Don't have accout yet? <Link to="/sign-up">Sign up..</Link></h6>
                    </div>
                    <div className="buttons">
                        <div className="cancel-button">
                            <Link to='/'>
                                <button className="in-button button button-not-active">Cancel</button> 
                            </Link>
                        </div>
                        <div className="right-buttons">
                            <div className="signin-button">
                                <input type="submit" className="in-button button" value="Sign In"/> 
                            </div> 
                        </div>
                    </div>
            </form>
        </div>
    )
};

export default SignIn