import React from 'react'
import './header.css'
import imdb from '../../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';
import tomatoes from '../../assets/PngItem_1381056 1.png';
import play from '../../assets/Play.svg';
const Header = () => {
  return (
    <div className='movie-box__header section_padding'>
      <div className="header__content">
        <div className="header__title">
          <p>
          John Wick 3 : Parabellum
          </p>
        </div>

        <div className="header__rating">
          <span className="imdb"> 
            <img src={imdb} alt="" />
          </span>
          <span className="text"> 86.0 / 100</span>
          <span className="tomatoes"> 
            <img src={tomatoes} alt="" />
          </span>
          <span className="text">97%</span>
        </div>

        <div className="header__text">
          <p>
          John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
          </p>
        </div>

        <div className="header__button">
          <div className="button">
            <img src={play} alt="" />
            <p>
                WATCH TRAILER
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header