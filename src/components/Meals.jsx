import React from 'react'
import {Link} from 'react-router-dom';

function Meals({image, name, id, category, instructions, tutorial}) {
  return (
    <div className='meal'>
    <div className='img-container'>
      <img src={image} alt={name} />
    </div>
    <div className='meal-footer'>
    <h3>{name}</h3>
    <h4>Category: {category}</h4>
    <a href={tutorial} style={{color:'red', fontSize:'20px',fontWeight:"300", textDecoration:'none', }}>Click for tutorial</a>
    <Link to={`/meal/${id}`} className="btn btn-primary btn-details">Details..</Link>
    </div>
    </div>
  )
}

export default Meals
