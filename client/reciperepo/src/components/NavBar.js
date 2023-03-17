import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder'

function NavBar() {
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    const [expandNavbar, setExpandNavbar] = useState(false);
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}> 
        <div className='toggleButton'>
            <button onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}
            > 
            <ReorderIcon /></button>
        </div>
        <div className='links'>
            <div className='h1'>
                <Link style={{ backgroundColor: 'transparent', boxShadow: 'none'}}className='h1-link' to='/'>
                    RecipeRepo
                </Link>
            </div>
            <div className='navbar-links'>
                <Link to='/'> Home </Link>
                <Link to='/favorites'> Favorites </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar