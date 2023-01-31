import React from 'react'
import { useState } from 'react'
import '../style/input.css'


export const Input = ({ onSearch, onSelect }) => {
  const [text, setText] = useState('')

  const getText = (e) => {
    e.preventDefault()
    onSearch(text)
  }
  const getValue = (e) => {
    e.preventDefault()
    const optionName = e.target.value
    onSelect(optionName)
  }

  return (
    <div className='input'>
      <form onSubmit={getText}>
        <input type="text" placeholder='Search...'
          onChange={(e) => setText(e.target.value)} value={text} />
      </form>

      <select className='select' onChange={getValue}>
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
