import React from 'react'
import Star from '../../../img/star.png'
function TestimonialCard(props) {
  return (
    <div className="testimonial-card">
        <img src={Star} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
    </div>
  )
}

export default TestimonialCard