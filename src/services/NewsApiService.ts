import axios from "axios";

const baseUrl = "https://newsapi.org/v2";
const apiKey = import.meta.env.VITE_NEWS_API_KEY;

const getLatest = () => {
  return axios.get(baseUrl);
};

const searchNews = (
  keywords: string = "General",
  date: Date | "" = "",
  category: string = "",
  source: string = ""
) => {
  const params = {
    apiKey,
    q: keywords,
    from: date,
    category,
    sources: source || "",
    pageSize: 10,
  };

  return axios.get(`${baseUrl}/top-headlines`, {
    params,
  });
};

const NewsAPIService = {
  getLatest,
  searchNews
};

export default NewsAPIService;
