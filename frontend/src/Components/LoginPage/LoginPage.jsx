import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import { useNavigate } from 'react-router';
import axios from 'axios';

const LoginPage = () => {
    const [email, updateEmailAddress] = useState('');
    const [password, updatePassword] = useState('');
    const [setLoginAlert, updateLoginAlert] = useState(false);

    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();

        const body = JSON.stringify({
            email,
            password
        });

        const options = {
            method: 'POST',
            body,
            headers : {
                'content-type' : 'application.json'
            }
        };

        axios.post('http://localhost:5000/login', options)
        .then(response => {
            console.log(response);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='login-page'>
            <div style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', backgroundColor: '#EAFCFC' }} className="jumbotron">
                <div className="container">
                    { setLoginAlert === true ? <Alert type='login' /> : null }
                    <form onSubmit={ loginHandler }>
                        <h2>Login</h2>
                        <p>Enter in credentials to proceed</p>
                        <label style={{ marginTop: '2rem' }}>Email Address </label>
                        <input style={{ marginLeft: '25%', width: '50%' }} type="email" className="form-control" onChange={e => updateEmailAddress(e.target.value)} />
                        <label style={{ marginTop: '1.5rem' }}>Password </label>
                        <input style={{ marginLeft: '25%', width: '50%' }} type="password" className="form-control" onChange={e => updatePassword(e.target.value)} />
                        <a href="/forgot-password">Forgot Password</a><br />
                        <button style={{ marginTop: '2rem', display: 'inline' }} className='btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;