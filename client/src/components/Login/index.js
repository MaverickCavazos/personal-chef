import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { Link, NavLink, Navigate  } from "react-router-dom";

import Auth from '../../utils/auth';

import emailLogo from '../images/emailLogo.jpg';
import loginLogo from '../images/loginLogo.jpg';
import usernameLogo from '../images/usernameLogo.jpg';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log(data);
            Auth.login(data.login.token);
            
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
        return  <Navigate replace to="/Testimonials" />
    };
    return (
        <div className="mainL">
            <div className="sub-mainL">
                <div>
                    <div className="imgL">

                        <div className="containerImageL">
                            <img src={usernameLogo} alt="usernameLogo" className="usernameLogo" />
                        </div>

                    </div>
                    <div>
                        <h1>login Page</h1>
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <img src={emailLogo} alt="emailLogo" className="emailLogo" />
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    className="nameL"></input>
                            </div>
                            <div>
                                <img src={loginLogo} alt="emailLogo" className="emailLogo" />
                                <input name="password"
                                    type="password"
                                    id="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                    className="nameL"></input>
                            </div>
                            <div className="login-button">

                                <button className="login-button2" type="submit">Login</button>
                            </div>
                        </form>
                        {error && <div>Login failed</div>}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login;