import React, { useState} from 'react';
import '../styles/Login.css'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Register() {
    const [loginPassword, setLoginPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [registeredState, setRegisteredState] = useState("");

    // console.log(username, password)

    const Register = () => {
        Axios.post("http://localhost:3001/register", {
        username: loginUsername,
        password: loginPassword,
        }).then((response) => {
            if(response.data.message) {
                setRegisteredState(response.data.message)
            }
        });
    };

    const navigate = useNavigate();

    return(
        <div className="login">
            <div>
                <label> Username </label>
                <input placeholder="Enter a username" onChange={(e) => setLoginUsername(e.target.value)}/>
            </div>
            <div>
                <label> Password </label>
                <input placeholder="Enter a password" onChange={(e) => setLoginPassword(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => {
                    navigate("/");
                    Register()}}>
                    Register
                </button>
            </div>
            {registeredState &&
            <p className="msg">
                {registeredState}
            </p>
            }
        </div>
    )
}

export default Register;