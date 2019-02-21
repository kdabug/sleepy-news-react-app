import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://newsapi.org/v2/everything?";
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `${TOKEN}`
//   }
// });

const fetchAllArticles = async topic => {
  const resp = await axios(`${BASE_URL}q=${topic}&apiKey=${TOKEN}`);
  console.log(resp);
  return resp.data.articles;
};

export default fetchAllArticles;
