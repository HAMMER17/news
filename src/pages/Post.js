/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/post.css'
import Card from '../module/Card'
import Panagation from '../module/Panagation'

export default function Post() {
  const [begin, setBegin] = useState(1)
  const [end] = useState(20)

  const urlBase = 'https://hacker-news.firebaseio.com/v0/'
  // const urlItems = `${urlBase}item/${search}`
  const urlPosts = `${urlBase}newstories.json`

  const [story, setStory] = useState([])

  const getPost = async () => {
    const { data } = await axios.get(urlPosts)

    return setStory(data)
  }

  useEffect(() => {
    getPost()

  }, [])
  const lastNews = begin * end
  const firstNews = lastNews - end
  const itemNews = story.slice(firstNews, lastNews)


  const getPaginate = item => setBegin(item)
  return (
    <div className='post_container'>
      <h1>New Story</h1>
      {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
      {itemNews.map((elem, index) => {
        return <Card key={elem} id={elem} index={index + firstNews} />
      })}
      <Panagation allNews={story.length} counterNews={end} getPaginate={getPaginate}
        props={begin}
      />
    </div>
  )
}
