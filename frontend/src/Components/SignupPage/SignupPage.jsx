import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import axios from 'axios';

const SignupPage = () => {
    const [email, updateEmailAddress] = useState('');
    const [password, updatePassword] = useState('');
    const [firstName, updateFirstName] = useState('');
    const [lastName, updateLastName] = useState('');
    const [setSignupAlert, updateSignupAlert] = useState(false);

    const signupHandler = (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            firstName,
            lastName,
            email,
            password
        });

        const options = {
            method: 'POST',
            body,
            headers: {
                'content-type' : 'application/json'
            }
        }

        axios.post("http://localhost:5000/signup", options)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='signup-page'>
            <div style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', backgroundColor: '#EAFCFC' }} className="jumbotron">
                <div className="container">
                    { setSignupAlert === true ? <Alert type='signup' /> : null }
                    <form onSubmit={ signupHandler }>
                        <h2>Signup</h2>
                        <p>Enter in signup details to proceed</p>
                        <label style={{ marginTop: '2rem' }}>First Name </label>
                        <input style={{ marginLeft: '25%', width: '50%' }} type="text" className="form-control" onChange={e => updateFirstName(e.target.value)} />
                        <label style={{ marginTop: '1rem' }}>Last Name </label>
                        <input style={{ marginLeft: '25%', width: '50%' }} type="text" className="form-control" onChange={e => updateLastName(e.target.value)} />
                        <label style={{ marginTop: '1rem' }}>Email Address </label>
                        <input style={{ marginLeft: '25%', width: '50%' }} type="email" className="form-control" onChange={e => updateEmailAddress(e.target.value)} />
                        <label style={{ marginTop: '1rem' }}>Password </label>
                        <input style={{ marginLeft: '25%', width: '50%' }} type="password" className="form-control" onChange={e => updatePassword(e.target.value)} />
                        <button style={{ display: 'inline', marginTop: '1rem' }} type="submit" class='btn btn-primary'>Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;