import axios from "axios";

const TOKEN = "fa7a7b997aaa4680b5bcb8ec549a6c56";
const BASE_URL = "https://newsapi.org/v2/everything?apiKey=";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${TOKEN}`
  }
});

const fetchArticles = async topic => {
  const resp = await api(`&q=${topic}`);
  return resp.data;
};

export default fetchArticles;
