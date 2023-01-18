/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/post.css'
import Card from '../module/Card'

export default function Post() {
  const urlBase = 'https://hacker-news.firebaseio.com/v0/'
  // const urlItems = `${urlBase}item/`
  const urlPosts = `${urlBase}newstories.json`

  const [story, setStory] = useState([])

  const getPost = async () => {
    const { data } = await axios.get(urlPosts)
    return setStory(data)
  }

  useEffect(() => {
    getPost()

  }, [])

  return (
    <div className='post_container'>
      <h1>New Story</h1>

      {story.slice(0, 50).map((elem) => {
        return <Card key={elem} id={elem} />
      })}

    </div>
  )
}
