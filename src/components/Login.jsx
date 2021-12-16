import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();
    };

    const register = e => {
        e.preventDefault();
    };

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className='loginLogo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>

            <div className='loginContainer'>
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>Password</h5>
                    <input
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type='submit' onClick={signIn} className='signInBtn'> Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='registerBtn'>Create an Amazon account</button>
            </div>
        </div>
    );
}

export default Login;
