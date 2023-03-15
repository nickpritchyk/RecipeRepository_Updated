import React, { useState } from 'react'
import '../styles/home.css'
import { SearchBar } from '../components/SearchBar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className='search-page'>
        <h1>
            RecipeRepo
        </h1>
        <SearchBar />
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
    </div>
  )
}

export default Home