import React from "react"
import { StaticQuery, graphql } from "gatsby"

const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const IndexPage = () => {
  return (
  <StaticQuery
    query={graphql`
{
  allBeJson {
    edges {
      node {
        title,
        netflixid
      }      
    }
  }
}
    `}
    render={data => {
      const { allBeJson } = data
      const { edges } = allBeJson
      const randomPosition = randomGenerator(0, edges.length - 1)
      const randomMovie = edges[randomPosition].node
      return (
      <a href={"https://www.netflix.com/watch/" + randomMovie.netflixid}>
					{randomMovie.title}
				</a>
      )
    }}
  />
  )
}

export default IndexPage
