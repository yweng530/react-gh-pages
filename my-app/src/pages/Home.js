import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
            <h1>Greetings!!!</h1>
            <p> I'm a junior at UIUC.</p>
            <Link to='/introduction'>
                <button> Click Here to know more about me!</button>
            </Link>
        </div>
    </div>
  )
}

export default Home
