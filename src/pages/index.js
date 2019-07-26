import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import axios from "axios"

const randomGenerator = (min, max, random = Math.random()) => {
	return Math.floor(random * (max - min + 1)) + min
}

const IndexPage = ({data}) =>
{

	const [image, setImage] = useState(undefined)
	const [randomMovie, setRandomMovie] = useState({})



	useEffect(() => {
		const {edges} = data.allBeJson
		const randomPosition = randomGenerator(0, edges.length - 1)
		setRandomMovie(edges[randomPosition].node)
	},[data, setRandomMovie])

		useEffect(() => {
			axios({
				url: `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=images&q=${randomMovie.netflixid}`,
				method: "GET",
				headers: {
					"X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
				"X-RapidAPI-Key": "8c075e4d6bmsh0a82cb219e37f09p1ddb4ejsnf1a67c1548da",
			},
			}).then(x => {
				const images = x && x.data && x.data.RESULTS
				console.log("images", images)
				if(!images.filter){
					return
				}
				const boxArts = images && images.filter(a => a.image[0].type === "boxart")
				console.log("boxart", boxArts)
				setImage(boxArts[0].image[0].url)
			})
	}, [randomMovie, setImage])

	return (
		<>
		<img src={image} alt={randomMovie.title}/>
		<button onClick={() => window.location.replace("https://www.netflix.com/watch/" + randomMovie.netflixid)}>
			{randomMovie.title}
		</button>
</>
	)
}


export const query = graphql`
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
`

export default IndexPage
