import React from 'react'
import '../style/country.css'

export default function Country({ data }) {
  return (
    <div className='country'>
      <h1>{data.name.common}</h1>
      <img src={data.flags.png} alt="flag" />
      <h2> <span>Region:  </span>{data.region}</h2>
      <h3> <span>Capital: </span>{data.capital}</h3>
      <h3> <span>Population: </span>{data.population} <span>people</span></h3>
    </div>
  )
}
