const axios = require("axios")


const URL =
  "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew99999-!1900,2018-!3,5-!7.5,10-!0-!Any-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=all&st=adv&ob=Relevance&p=0&sa=and"

const getMovies = async(movies = [], page=0, count = undefined) => {
	if(page > 2)
	{
		return [];
	}
  newMovies = await axios({
    url: URL,
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "8c075e4d6bmsh0a82cb219e37f09p1ddb4ejsnf1a67c1548da",
    },
	}).then(async (data) => await getMovies(data.data.ITEMS, page+1, data.data.COUNT))

	console.log("movies", movies)
	console.log("movies", movies.length)
	console.log("newmovies", newMovies)

	return newMovies

}

getMovies()
