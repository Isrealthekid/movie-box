import React, { useState, useEffect } from 'react';
// import MovieCard from './MovieCard';
import './featured.css';
import heart from '../../assets/Heart.svg'
function TopMovies () {

    const API_KEY = '1939e08fcfc1b966f48087ee877ba03b';
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

    const [ moviesArr, setMoviesArr] = useState([])
    const [ genreList, setGenreList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            
            const result = await fetch(URL)
            result.json().then(data => {
                setMoviesArr(data.results.slice(0, 10));
            })

            const genreResult = await fetch(genreURL)
            genreResult.json().then(data => {
                setGenreList(data.genres)
            })
        }
        fetchData();
    }, []);

    function getGenres(movie) {
        let genre = [];
      
        movie.genre_ids.forEach((id) => {
          const genreObject = genreList.find((obj) => obj.id === id);
          if (genreObject) {
            genre.push(genreObject.name);
          }
        });
      
        return genre.join(', ');
      }
      

    return (
       
        
            <div className='movie-list'>
                {moviesArr.map( movie => (
                    
                        
                    
                   
                    
                    
                    




            <div className="movie-card" key={movie.id} data-testid='movie-card'>
            <div className="movie-poster" data-testid='movie-poster'>
            poster={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
              <span className='like'> <img src={heart} alt="" /> </span>
            <span className='series'>Tv Series</span>

            </div>

                        
            <div className="release-date" >
               <span>releaseDate={movie.release_date}</span>
            </div>

            <div className="movie-title" data-testid='movie-title'>
            title={movie.title}
            </div>

            <div className="movie-rating" data-testid='movie-rating'>
            rating={movie.vote_average}
            </div>

            <div className="movie-genre" data-testid='genre'>
              <span>genres={getGenres(movie)}</span>
            </div>


        </div>
                
                ))}
            </div>
    
    )
}

export default TopMovies;