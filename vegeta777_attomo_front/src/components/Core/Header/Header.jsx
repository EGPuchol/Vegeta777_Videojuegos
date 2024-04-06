import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className='logo_container'>
            <img src='logo_vegeta777_neon_web.png' alt='logo_vegeta777' className='logo_vegeta777'></img>
        </div>
        <Link to={"/register"} className='register'>
        <div>
        <button className='register_button'>Regístrate</button>
        </div>
        </Link>
    </div>
  )
}

export default Header