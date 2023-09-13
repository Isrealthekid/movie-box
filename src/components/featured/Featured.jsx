import React from 'react'
import './featured.css';
import {BiChevronRight} from 'react-icons/bi';
import tomatoes from '../../assets/PngItem_1381056 1.png';
import imdb from '../../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';
import stranger from '../../assets/Poster-stranger.png';
import heart from '../../assets/Heart.svg'

const Featured = () => {
  return (
    <div className='movie-box__featured section_padding'>
      <div className="featured__header">
          <span className='featured__header-text'>Featured Movie</span>

          <span className='seemore'> <span >See More</span> <BiChevronRight/> </span>
        </div>

      <div className="featured__content">
        <div className="movie-card" data-testid='movie-card'>
            <div className="movie-poster" data-testid='movie-poster'>
              <img src={stranger} alt="" />
              <span className='like'> <img src={heart} alt="" /> </span>
            <span className='series'>Tv Series</span>

            </div>

                        
            <div className="release-date" >
               <span>USA 2016 - CURRENT</span>
            </div>

            <div className="movie-title" data-testid='movie-title'>
              STRANGER THINGS
            </div>

            <div className="movie-rating" data-testid='movie-rating'>
             <span >
             <img src={imdb} alt="" /> <span>86.0 / 100</span>
              </span> 

              <span>
              <img src={tomatoes} alt="" /> <span>97%</span>
              </span>
            </div>

            <div className="movie-genre" data-testid='genre'>
              <span>Action Adventure Horror</span>
            </div>


        </div>
      </div>
    </div>
  )
}

export default Featured