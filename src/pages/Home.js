import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import '../style/home.css'
import Mokka from '../module/Mokka'

export default function Home() {
  const [mokka, setMokka] = useState([])
  const [search, setSearch] = useState('')
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get('https://62d2e401afb0b03fc5ad3c39.mockapi.io/product')
      .then(data => setMokka(data.data))
      .catch(err => console.log(err))
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])
  return (
    <div className='home_container'>
      <h1 style={{ textAlign: 'center', marginTop: 80 }}>Users</h1>
      <input className='home_input' type="text" placeholder='Search...'
        onChange={(e) => setSearch(e.target.value)} />
      <div className='home'>
        {loader ? (<MoonLoader color="#08f207" />) : mokka.filter(elem => elem.name.includes(search)).map(elem => {
          return <Mokka key={elem.id} data={elem}
          //  id={elem.id} title={elem.product} text={elem.text}avatar={elem.avatar}
          />
        })}
      </div>
    </div>
  )
}
