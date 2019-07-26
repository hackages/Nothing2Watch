import React, {useState, useEffect} from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BE from "../../BE.json"


const URL =
  "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=images&q=70113007"

const IndexPage = () => {
	const [movie, setMovie] = useState(BE[Math.floor(Math.random() * BE.length)].netflixid)

	useEffect(() => setMovie(useState(BE[Math.floor(Math.random() * BE.length)].netflixid)))

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <a href={"https://www.netflix.com/watch/" + movie.netflixid}>
        Watch a movie
      </a>
    </Layout>
  )
}

export default IndexPage
