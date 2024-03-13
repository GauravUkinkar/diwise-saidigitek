import React from 'react'
import "../styles/SecIndicator.scss"


function SecIndicator(props) {
  return (
    <div className='secIndicator'>
        <div className="dash"></div>
        <span>{props.text}</span>
    </div>
  )
}

export default SecIndicator
