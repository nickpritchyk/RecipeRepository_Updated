import React, { useState} from 'react';
import '../styles/Login.css'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState('');
    const [nav, setNav] = useState('false');

    // console.log(username, password)

    const login = () => {
        Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
        }).then((response) => {
            if(response.data.message) {
                setLoginState(response.data.message)
                setNav(true)
                return(nav)
            } else {
                setLoginState(response.data[0].username)
            }
        });
    };

    const navigate = useNavigate();

    return(
        <div className="login">
            <div>
                <label> Username </label>
                <input placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label> Password </label>
                <input placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
            <button onClick={login}>
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