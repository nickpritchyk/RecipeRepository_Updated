import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import Axios from 'axios';

function NavBar() {
    const location = useLocation();
    const [loginState, setLoginState] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setExpandNavbar(false);
        Axios.get("http://localhost:3001/login").then((response) => {
          if(response.data.loggedIn === true){
          setLoginState(response.data.user[0].username)
          }
  })
    }, [location]);

    function handleLogout() {
        navigate('/')
        setLoginState("")
        Axios.get("http://localhost:3001/logout").then((response) => {
          if(response){
            console.log(response)
          }
    })}

    const [expandNavbar, setExpandNavbar] = useState(false);
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}> 
        <div className='toggleButton'>
            <div id={expandNavbar ? "open" : "close"}>
                <Link style={{ backgroundColor: 'transparent', boxShadow: 'none'}}className='h1-popup' to='/'>
                    RecipeRepo
                </Link>
            </div>

            <button onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}
            > 
            <ReorderIcon /></button>

        </div>
        <div className='links'>
            <div className='h1'>
                <Link style={{ backgroundColor: 'transparent', boxShadow: 'none'}}className='h1-link' to='/'>
                    <HighlightOffIcon style={{fontSize: '50px'}}/>
                </Link>
                <Link style={{ backgroundColor: 'transparent', boxShadow: 'none'}}className='h1-link-closed' to='/'>
                    RecipeRepo
                </Link>
            </div>
            <div className='navbar-links'>
                <Link to='/'> Home </Link>
                <Link to='/favorites'> Favorites </Link>
            </div>
            <div className='user-heading'>
                {loginState}
            </div>
            <div className='user-heading'>
                <button onClick={handleLogout} style={{backgroundColor: 'transparent', border: 'none', color: 'salmon'}}>
                    <h4>Logout</h4>
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar;