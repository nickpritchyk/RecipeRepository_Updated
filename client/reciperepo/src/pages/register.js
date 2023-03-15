import React, { useState} from 'react';
import '../styles/Login.css'
import Axios from 'axios'

function Register() {
    const [loginPassword, setLoginPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");

    // console.log(username, password)

    const Register = () => {
        Axios.post("http://localhost:3001/register", {
        username: loginUsername,
        password: loginPassword,
        }).then((response) => {
            console.log(response);
        });
    };

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
                <button onClick={Register}>
                    Register
                </button>
            </div>
        </div>
    )
}

export default Register;