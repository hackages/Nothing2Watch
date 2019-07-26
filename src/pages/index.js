import React from "react"
import { StaticQuery, graphql } from "gatsby"

const randomGenerator = (min, max, random = Math.random()) => {
	return Math.floor(random * (max - min + 1)) + min
}

const IndexPage = () =>( 
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
						<button onClick={() => window.location.replace("https://www.netflix.com/watch/" + randomMovie.netflixid)}>
							{randomMovie.title}
						</button>
					)
				}}
			/>
)

export default IndexPage
