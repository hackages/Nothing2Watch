import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import axios from "axios"
import styled from "styled-components"

import useTimer from "../useTimer"

const Wrapper = styled.div`
	background: black;
	height: 100vh;
	width: 100%;
	display:flex;
	align-content: center;
	justify-content: center;
align-content: center;
flex-direction:column;


	`

const ButtonWrapper = styled.div`
	width: 100%;
	display:flex;
	align-content: center;
	justify-content: center;
align-content: center;


	`

const Title = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 37px;
text-align: center;

color: #D93636;
`

const Button = styled.button`
background: red;
border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
	border-radius: 10px;
	max-width: 200px;
	padding: 10px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
}
`


const randomGenerator = (min, max, random = Math.random()) => {
	return Math.floor(random * (max - min + 1)) + min
}

const IndexPage = ({data}) =>
{

	const [image, setImage] = useState(undefined)
	const [randomMovie, setRandomMovie] = useState({})

  const [timeLeft, restart] = useTimer(5 * 1000 , 1000);

	const goToMovie = () => window.location.replace("https://www.netflix.com/watch/" + randomMovie.netflixid)

	const refresh = () => window.location.reload(true)


useEffect(() => {
    timeLeft <= 10 && goToMovie();
  }, [timeLeft]);

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
	if(!image){
		return (<></>)
	}

	return (
		<Wrapper>
			<Title>Nothing to watch?</Title>
		<img src={image} alt={randomMovie.title}/>
		<p>{timeLeft}</p>
		<ButtonWrapper>
		<Button onClick={refresh}>
			Already Seen
		</Button>
	</ButtonWrapper>
</Wrapper>
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
