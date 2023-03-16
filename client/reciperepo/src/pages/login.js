import React, { useState, useEffect} from 'react';
import '../styles/Login.css'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';
import Favorites from '../pages/favorites.js'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState("");

    // console.log(loginState)

    const login = () => {
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

    const navigate = useNavigate();
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
            <div className='login-page-btn'>
            <button style={{all: 'unset'}} onClick={() => {
                    login()}}>
                    Log in
            </button> 
            </div>
            <p>
                {loginState}
            </p>
        </div>
    )
}

export default Login;