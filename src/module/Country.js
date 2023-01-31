import React from 'react'
import '../style/country.css'
import { useNavigate } from 'react-router-dom'

export default function Country({ data }) {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(`/country/${data.name.common}`)
  }
  return (
    <div className='country' onClick={onClick}>
      <h1>{data.name.common}</h1>
      <img src={data.flags.png} alt="flag" />
      <h2> <span>Region:  </span>{data.region}</h2>
      <h3> <span>Capital: </span>{data.capital}</h3>
      <h3> <span>Population: </span>{new Intl.NumberFormat().format(data.population)} <span>people</span></h3>
    </div>
  )
}
