import React from 'react';
import '../styles/Introduction.css';

function Introduction() {
  return (
    <div className='about'>
      <div className='aboutTop'></div>
      <div className='aboutBottom'>
        <h1>ABOUT ME</h1>
        <p>
          I am currently a junior in CS at UIUC. I was raised and born in Ningbo, China.
          Some of my current interests in CS include Artificial Intelligence, Web Development, Data and Information Systems.
          I am interested in joining the PeopleWeave Project because I think it is a great opportunity to hone my technical skills.
          I could delve deeper into web development and learn more about its usefulness.
        </p>
        <p>
          Fun facts about me: I'm a vegetarian.
          I like reading and listening to music in my free time.
          My mbti is ISTJ.
        </p>
      </div>
    </div>
  )
}

export default Introduction
