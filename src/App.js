import React from 'react'

import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import TopMovies from './components/featured/TopMovies';

const App = () => {
  return (
    <div className="App">
     <div className="header">
      <Navbar/>
      <Header/>
    </div> 
   <TopMovies/>
    <Featured/>
    <Footer/>   

    </div>
  )
}

export default App