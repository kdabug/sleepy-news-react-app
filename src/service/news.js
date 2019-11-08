import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://newsapi.org/v2/";
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `${TOKEN}`
//   }
// });

const fetchTopicsArticles = async topic => {
  const resp = await axios(
    `${BASE_URL}everything?q=${topic}&sortby=popularity&apiKey=${TOKEN}`
  );
  console.log(resp);
  return resp.data.articles;
};

const fetchTopUSArticles = async topic => {
  const resp = await axios(
    `${BASE_URL}top-headlines?country=us&apiKey=${TOKEN}`
  );
  console.log(resp);
  return resp.data.articles;
};

export { fetchTopicsArticles, fetchTopUSArticles };
