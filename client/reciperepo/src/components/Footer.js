import React from 'react'
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/nickpritchyk/'>
              <InstagramIcon/>
            </a>
            <a href='https://github.com/nickpritchyk'>
            <GitHubIcon/>
            </a>
        </div>
            <p> 2023 &copy; NicholasPritchyk </p>
    </div>
  )
}

export default footer