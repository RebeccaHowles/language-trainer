import './home.css';
import React from 'react';
import Landing from './Landing.png'

function Home () {
  const mission= `"Learning and mastering a language opens doors both personally and professionally. It takes hard work and commitment for student and teacher alike but it should also be rewarding and fun! I'd love to help you on this journey."`
  
  return (
    <div className='homeContent'>
      <div className='missionStatement'>
        <h2>{mission}</h2>
      </div>
    </div>
  );
}

export default Home;