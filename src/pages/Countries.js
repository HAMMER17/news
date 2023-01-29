import axios from 'axios'
import { useState, useEffect } from 'react'

import { Input } from '../components/Input'
import Country from '../module/Country'

export default function Countries() {
  const [country, setCountry] = useState([])
  const [text, setText] = useState('')
  const [value, setValue] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    try {
      axios.get('https://restcountries.com/v3.1/all')
        .then(({ data }) => {
          setCountry(data)
        })
    } catch (err) {
      console.log(err)
    }
  }, [])

  const dataCountry = () => {
    // let s = [];
    if (value) {
      setItems(country.filter(el => el.region.includes(value)))
    }
    if (text) {
      setItems(country.filter(el => el.name.common.includes(text)))
    } else
      setItems(country)
  }
  useEffect(() => {
    dataCountry()
    // eslint-disable-next-line
  }, [text, value])

  console.log(items)
  return (
    <>
      <Input setText={setText} text={text} setValue={setValue} value={value} />

      <div className='country_container'>

        {items?.map((elem, id) => {
          return <Country data={elem} key={id} />
        })}

      </div>
    </>
  )
}
