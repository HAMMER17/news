import React from 'react'
import '../style/mokka.css'

export default function Mokka({ title, avatar, text, id }) {
  return (
    <div className='mokka_container'>
      <h6>{id}</h6>
      <h3>{title}</h3>
      <img src={avatar} alt="img" />
      <p>{text}</p>
    </div>
  )
}
