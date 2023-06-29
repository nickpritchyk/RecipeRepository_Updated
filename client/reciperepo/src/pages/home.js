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
       {/* {!loginState &&
      }  */}
        <SearchBar/>
    </div>
  )
}

export default Home