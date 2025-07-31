import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className = "home">
        <h1>Welcome to Wristle</h1>
        <p className = "description"> This is a competitive game where we provide a passage of writing and you have to guess the correct author!</p>
      
        <Link to = "/writing" class = "button">
            <button className = "startButton">
                Start now
            </button>
        </Link>
    </div>
  )
}

export default Home;
