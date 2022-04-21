import React from 'react';
import emailLogo from '../images/emailLogo.jpg';
import loginLogo from '../images/loginLogo.jpg';
import usernameLogo from '../images/usernameLogo.jpg';

function Login(){
    return (
        <div className = "mainL">
            <div className = "sub-mainL">
                <div>
                    <div className = "imgL">

                        <div className = "containerImageL">
                            <img src={usernameLogo} alt = "usernameLogo" className = "usernameLogo"/>
                        </div>

                    </div>
                        <div>
                            <h1>login Page</h1>
                            <div>
                            <img src={emailLogo} alt = "emailLogo" className = "emailLogo"/>
                            <input type="text" placeholder='Email' className = "nameL"></input>
                        </div>
                        <div>
                            <img src={loginLogo} alt = "emailLogo" className = "emailLogo"/>
                            <input type="text" placeholder='Password' className = "nameL"></input>
                        </div>
                            <div className = "login-button">
                                <button className = "login-button2">Login</button>
                            </div>
                        </div>
                        
                </div>
            </div>

        </div>
    )
}

export default Login;