import axios from 'axios'
import { useState, useEffect } from 'react'

import { Input } from '../components/Input'
import Country from '../module/Country'

export default function Countries() {

  const [country, setCountry] = useState([])

  const allCountries = () => {
    try {
      axios.get('https://restcountries.com/v3.1/all')
        .then(({ data }) => {
          setCountry(data)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const dataInput = (nameCountry) => {
    try {
      axios.get(`https://restcountries.com/v3.1/name/${nameCountry}`)
        .then(({ data }) => setCountry(data))
    } catch (err) {
      console.log(err)
    }
  }
  const dataSelect = (nameRegion) => {
    try {
      axios.get(`https://restcountries.com/v3.1/region/${nameRegion}`)
        .then(({ data }) => setCountry(data))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    allCountries()
    // eslint-disable-next-line
  }, [])

  console.log(country)
  return (
    <>
      <Input onSearch={dataInput} onSelect={dataSelect} />

      <div className='country_container'>

        {country.map((elem, id) => {
          return <Country data={elem} key={id} />
        })}

      </div>
    </>
  )
}
