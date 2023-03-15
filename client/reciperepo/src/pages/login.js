import React, { useState} from 'react';
import '../styles/Login.css'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState('');
    const [nav, setNav] = useState();

    // console.log(username, password)

    const login = () => {
        Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
        }).then((response) => {
            if(response.data.message) {
                setLoginState(response.data.message)
                setNav(response.data.message)
            } else {
                setNav(response.data[0].username)
                // setLoginState(response.data[0].username)
            }
        });
    };

    const navigate = useNavigate();

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
                    login()
                    loginState ? navigate("/") : navigate("/login");}}>
                    Log in
                </button>
            </div>
            <p>
                {nav}
            </p>
        </div>
    )
}

export default Login;