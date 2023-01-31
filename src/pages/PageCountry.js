/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../style/pagecountry.css'

export default function PageCountry() {
  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState([])
  // const [borders, setBorders] = useState([])
  // const [country, setCountry] = useState([])
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${params.name}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err + ' params.name'))
    // eslint-disable-next-line
  }, [params])

  // useEffect(() => {
  //   const borders = data.map(el => el.borders)
  //   axios.get(`https://restcountries.com/v3.1/alpha/${borders}`)
  //     .then(({ data }) => setCountry(data))
  //     .then((err) => console.log(err + ' borders'))
  // }, [params])
  // console.log(country)

  return (
    <div className='page'>

      {data.map((elem, id) => {
        return <>
          <div className="page_left" key={id}>
            <button onClick={() => navigate(-1)}>back</button>
            <img src={elem.flags.png} alt="flag" />
            <h1>{elem.name.common}</h1>
            <h2>{elem.capital}</h2>
            <h2>{elem.region}</h2>
            <span>Population:
              <h3>{new Intl.NumberFormat().format(elem.population)}</h3>people</span>

          </div>
          <div className="page_right">
            <h1>{elem.name.common}</h1>
            <h3>{elem.region}</h3>
            <h3>{elem.capital}</h3>
            <h4>{new Intl.NumberFormat('ru-RU').format(elem.population)} <span> people</span></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Vel, magni minima? Excepturi amet blanditiis quia illo exercitationem saepe non officia,
              mollitia est doloremque voluptatibus ex accusantium quisquam veritatis ad deserunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore id unde blanditiis eaque sapiente nostrum molestias
              rem dolore quibusdam quas eius deleniti accusantium iusto ullam,
              voluptates quidem vel nam ducimus!</p>
            {/* <div className="page_country">
              {country.map((el, id) => {
                return <Link key={id} to={`/country/${el.name}`}>
                  <h5>{el.name.common}</h5>
                </Link>

              })}
            </div> */}

          </div>

        </>
      })}

    </div>
  )
}
