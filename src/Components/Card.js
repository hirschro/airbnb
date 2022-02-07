import React from 'react';
import Star from '../images/Star1.png';


export default function Card(props) {

console.log(props)

  return (
    <div className="card">
      <img src={require(`../images/${props.img}`)}
        className="card--image" 
        alt="card pic" />
      <div className="card--stats">
        <img src= {Star} className="card--star" alt="star" />
          <span>{props.rating}</span>
          <span className="gray">{props.reviewCount} • &nbsp;</span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}