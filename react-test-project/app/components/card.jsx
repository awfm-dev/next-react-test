import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>

        <img src="/logo.png" className='logo_image'></img>

        <p className='card_title'>{props.title}</p>

    </div>
  )
}

export default Card