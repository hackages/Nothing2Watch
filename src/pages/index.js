import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import axios from "axios"


const URL =
  "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=images&q=70113007"

const IndexPage = () => {
  const moviesList = axios({
    url: URL,
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "8c075e4d6bmsh0a82cb219e37f09p1ddb4ejsnf1a67c1548da",
    },
  }).then(console.log)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <a href={moviesList[Math.floor(Math.random() * moviesList.length)]}>
        Watch a movie
      </a>
    </Layout>
  )
}

export default IndexPage
