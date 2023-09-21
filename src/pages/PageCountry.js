/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ClockLoader } from 'react-spinners'
import '../style/pagecountry.css'

export default function PageCountry() {
  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState([])
  const [country, setCountry] = useState([])
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState([])

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${params.name}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err + ' params.name'))
    // eslint-disable-next-line
  }, [params])
  // console.log(params)

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/name/${params.name}`)
      .then(({ data }) => setCurrent(data))
  }, [params])

  useEffect(() => {
    const borders = data.map(el => el.borders)
    axios.get(`https://restcountries.com/v3.1/alpha?codes=${borders}`)
      .then((data) => setCountry(data.data))
      .catch((err) => console.log(err + ' borders'))
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [data])



  const array = current.map((el, i) => (<div key={i} className='current'>
    <h3>Currencies</h3>
    <h4><span>Name: </span>{el.currencies[0].name}</h4>
    <h4><span>Code: </span>{el.currencies[0].code}</h4>
    <h4><span>Symbol: </span>{el.currencies[0].symbol}</h4>

  </div>))

  return (
    <div className='page'>

      {data.map((elem) => {
        return <div key={elem.name.common} className="page_container">
          <div className="page_left" key={elem.name.common}>
            <button onClick={() => navigate(-1)}>back</button>
            <img src={elem.flags.png} alt="flag" />
            <h1>{elem.name.common}</h1>
            <h2>{elem.capital}</h2>
            <h2>{elem.region}</h2>
            <h3><span>Population: </span> {new Intl.NumberFormat('de-DE').format(elem.population)}<span> people</span></h3>

          </div>
          <div className="page_right">
            <h1>{elem.name.common}</h1>
            <h3>{elem.region}</h3>
            <h3>{elem.capital}</h3>
            <h4>{new Intl.NumberFormat('ru-RU').format(elem.population)}
              <span> people</span></h4>
            <div>{array}</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Vel, magni minima? Excepturi amet blanditiis quia illo exercitationem saepe non officia,
              mollitia est doloremque voluptatibus ex accusantium quisquam veritatis ad deserunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore id unde blanditiis eaque sapiente nostrum molestias
              rem dolore quibusdam quas eius deleniti accusantium iusto ullam,
              voluptates quidem vel nam ducimus!</p>
            <h3 className='page_h3'>borders</h3>
            <div className="page_country">
              {loading ? (<ClockLoader color="#2407ef" />) :
                country.map((el) => {
                  return <Link key={el.name.common} to={`/country/${el.name.common}`}>
                    <h5 key={el.name.common}>{el.name.common}</h5>
                  </Link>
                })}
            </div>

          </div>

        </div>
      })}

    </div>
  )
}
