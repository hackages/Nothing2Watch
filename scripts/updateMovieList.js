const axios = require("axios")
const fs = require('fs');

const getMovies = async(movies = [], page=0, count = undefined) => {

  const URL = `https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew99999-!1900,2018-!3,5-!7.5,10-!0-!Movie-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=26&st=adv&ob=Relevance&p=${page}&sa=and`

	if(page > count/100)
	{
		return [];
	}
  newMovies = await await axios({
    url: URL,
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "8c075e4d6bmsh0a82cb219e37f09p1ddb4ejsnf1a67c1548da",
    },
	}).then(async (data) => await getMovies(data.data.ITEMS, page+1, data.data.COUNT))

	return [...movies, ...newMovies]

}

getMovies().then( data => fs.writeFileSync('../BE.json', JSON.stringify(data)))
