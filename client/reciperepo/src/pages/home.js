import React, { useState } from 'react'
import '../styles/home.css'
import { SearchBar } from '../components/SearchBar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className='search-page'>
        <h1>
            RecipeRepo
        </h1>
        <SearchBar />
        <p className="login-btn">
          <Link to="/login" style={{textDecoration: 'none'}}>Log in/Register Here</Link>
        </p>
    </div>
  )
}

export default Home