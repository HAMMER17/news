import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUserCard } from '../redax/reduser'
import '../style/mokka.css'

export default function Mokka({ data }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getUser = () => {
    dispatch(addUserCard(data))
    navigate(`/${data.id}`)
  }
  return (
    <div className='mokka_container' onClick={getUser}>
      <h6>{data.id}</h6>
      <h3>{data.name}</h3>
      <img src={data.avatar} alt="img" />
      <p><span>Phone: </span>{data.phone}</p>
      <p><span>Email: </span>{data.email}</p>
      <p><span>City: </span>{data.city}</p>
    </div>
  )
}
