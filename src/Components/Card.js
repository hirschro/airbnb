import React from 'react';
// import CardImage from '../../public/images/image12.png';

export default function Card(props) {

console.log(props)

  return (
    <div className="card">
      <img src={`require(../../public/images ${props.img})`} className="card--image" alt="card pic" />
      <div className="card-stats">
      <img src="/images/star.png" className="card--star" alt="star" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} • &nbsp;</span>
        <span className="gray">{props.country}</span>
      </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
      
  )
}