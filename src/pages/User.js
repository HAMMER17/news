import React from 'react'
import { useSelector } from 'react-redux'
import '../style/user.css'

export default function User() {
  const data = useSelector(state => state.user.userCard)
  console.log(data)
  return (
    <div className='user_container'>
      <div className="user_left">
        <img src={data.avatar} alt="user" />
      </div>
      <div className="user_right">
        <div className="user_img">
          <h1>{data.name}</h1>
          <img src={data.product} alt="img" />
        </div>

        <h2><span>Phone: </span>{data.phone}</h2>
        <h2><span>Email: </span>{data.email}</h2>
        <h3><span>City: </span>{data.city}</h3>
        <p>{data.text}</p>

      </div>
    </div>
  )
}
