import React from "react";
import PhotoGrid from '../images2/image-grid.png';



export default function Hero() {
  return (
    <div>
      <div className="hero">
      <img src={ PhotoGrid } className="hero--photo" alt="grid"
      />
      </div>
      <div className="hero--text">
        <h1 className="hero--header">Online Experiences</h1>
        <div className="hero--text">
          <p>Join unique interactive activities led by one-of-a-kind hosts -- all without leaving home.</p>
        </div>
      </div>
    </div>
  )
}
