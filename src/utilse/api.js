import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTA0OWExZmNiOTg5OGZjMTI4NzA0YTQ0MDdhOWFiYyIsInN1YiI6IjY2MmNlMjFhYTgwNjczMDEyNWU4MzQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Imk0aKi4J4KHrnFsASESBqDzBaL4BMFWf46B_p6VmkQ";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
}
export const fetchDataFromApi = async (url, params) =>{
  try {
    const  {data} = await axios.get(BASE_URL + url, {
      headers,
       params,
    })
    return data;
  } catch (error) {
    console.log(error);
    return error
  }
}