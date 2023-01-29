import React from 'react'
import '../style/input.css'


export const Input = ({ setText, text, setValue, value }) => {

  console.log(value)
  return (
    <div className='input'>
      <input type="text" placeholder='Search...'
        onChange={(e) => setText(e.target.value)} value={text} />
      <select className='select' onChange={(e) => setValue(e.target.value)}>
        <option value="Filter"> --Region-- </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
