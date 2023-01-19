import React from 'react'
import '../style/mokka.css'

export default function Mokka({ data }) {
  return (
    <div className='mokka_container'>
      <h6>{data.id}</h6>
      <h3>{data.name}</h3>
      <img src={data.avatar} alt="img" />
      <p><span>Phone: </span>{data.phone}</p>
      <p><span>Email: </span>{data.email}</p>
      <p><span>City: </span>{data.city}</p>
    </div>
  )
}
