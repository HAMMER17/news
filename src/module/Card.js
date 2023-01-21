/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Time from './Time'
import axios from 'axios'
import '../style/card.css'

export default function Card({ id, index }) {
  const [post, setPost] = useState({})
  const urlBase = 'https://hacker-news.firebaseio.com/v0/'
  const urlItems = `${urlBase}item/`

  useEffect(() => {
    axios.get(`${urlItems + id}.json`)
      .then(data => setPost(data.data))
  }, [])

  return (
    <div className='card'>
      <p>{index}</p>
      <h2>{post.title}</h2>
      <h6><span>By: </span>{post.by}</h6>
      <h6>{post.text}</h6>
      <a href={post.url}><p>{post.url}</p></a>
      <h3><span>News Updated: </span>{Time(post.time)} <span> ago</span></h3>
      <p>{post.score}<span> comments</span></p>
    </div>
  )
}
