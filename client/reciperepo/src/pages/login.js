import React, { useState, useEffect} from 'react';
import '../styles/Login.css'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState("");

    // console.log(loginState)
    const navigate = useNavigate();

    const login = () => {
        // navigate('/');
        Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
        }).then((response) => {
            if(response.data.message) {
                // console.log("Inside TRUE")
                setLoginState(response.data.message)
            } else {
                // console.log('Inside FALSE')
                setLoginState(response.data[0].username)
            }
        });
    };
    
    
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if(response.data.loggedIn == true){
            setLoginState(response.data.user[0].username)
            }
    })
    }, []);

    return(
        <div className="login">
            <div>
                <label> Username </label>
                <input className='input' placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label> Password </label>
                <input className='input' placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {loginState && 
                <p style={{borderBottom: '2px solid salmon', width: '100%'}}>{loginState} has logged in</p>
            }
            <div className='login-page-btn'>
            <button style={{all: 'unset'}} onClick={() => {login()}}>
                    Log in
            </button> 
            </div>
            {loginState && 
                <p className='login-page-btn'>
                    <Link style={{all: 'unset', textDecoration: 'none'}} to='/'> 
                        <button style={{all: 'unset'}}> Go Home </button>
                    </Link>
                </p>
            }
        </div>
    )
}

export default Login;