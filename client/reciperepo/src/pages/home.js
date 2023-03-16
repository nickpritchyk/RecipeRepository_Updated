import React, { useState, useEffect } from 'react'
import '../styles/home.css'
import { SearchBar } from '../components/SearchBar'
import Axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  const [dropdown, setDropdown] = useState(false);
  const [loginState, setLoginState] = useState(false);


  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
        if(response.data.loggedIn == true){
        setLoginState(true)
        }
})
}, []);

  return (
    <div className='search-page'>
        <SearchBar />
        {!loginState &&

        <div className="login-btn">
          <button onClick={() => setDropdown(dropdown ? false : true)} className="login-btn-top">Log in/Register Here</button>
          {dropdown &&
          <div className="dropdown">
            <ul style={{listStyleType: 'none', margin: 0 ,padding:0}}>
              <li>
                <Link to="/login" style={{textDecoration: 'none'}}>Log in Here</Link>
              </li>
              <li>
                <Link to="/register" style={{textDecoration: 'none'}}>Register Here</Link>
              </li>
            </ul>
          </div>
          } 
        </div>
        
        }
    </div>
  )
}

export default Home