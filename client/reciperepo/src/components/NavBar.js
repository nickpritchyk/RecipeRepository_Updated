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
            <Link to='/'> Home </Link>
            <Link to='/favorites'> Favorites </Link>
        </div>
    </div>
  )
}

export default NavBar