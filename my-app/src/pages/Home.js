import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
            <h1>Greetings!!!</h1>
            <p> My name is Yuhua Weng.</p>
            <Link to='/introduction'>
                <button> Click Here to know more about me!</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
