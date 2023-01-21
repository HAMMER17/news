// import React, { useState } from 'react'
import '../style/panagation.css'

export default function Panagation({ counterNews, allNews, getPaginate, props }) {
  const newsLength = []

  for (let i = 1; i <= Math.ceil(allNews / counterNews); i++) {
    newsLength.push(i)
  }

  return (
    <div>
      <ul className='page_container'>
        {newsLength.map((number) => (
          <li className={props === number ? 'page_red' : 'page_li'} key={number}
            onClick={() => getPaginate(number)}>{number}</li>
        ))}
      </ul>
    </div>
  )
}
