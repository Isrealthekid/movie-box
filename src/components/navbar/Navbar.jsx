
import React,{useState} from 'react';
import './navbar.css';
import  {TbMenu} from 'react-icons/tb';
// import tv from '../../assets/tv.png';
import logo from '../../assets/Logo.svg';

const Navbar = () => {
  return (
    <div className='movie-box__navbar '>
        <div className="movie-box__logo">
          <img src={logo} alt="" />
        </div>

        <div className="movie-box__search-bar">
          <input type="text" placeholder='What do you want to watch' />
        </div>

        <div className="movie-box__menu-buttons">
          <div className="sign-in">
            <p>Sign in</p>
          </div>

          <div className="menu-button">
            <span>
              <TbMenu/>
            </span>
          </div>
        </div>

        </div>
  )
}

export default Navbar