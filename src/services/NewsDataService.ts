import axios from "axios";
import { NewsDataParams, NewsDataResponse, NewsPreferencesParam } from "src/utils/types";

const baseUrl = "https://newsdata.io/api/1";
const apiKey = import.meta.env.VITE_NEWS_DATA_KEY;

const getLatest = async (preferences:NewsPreferencesParam = {
  keywords: "",
  categories: "",
  sources: ""
}):Promise<NewsDataResponse> => {
  const params:NewsDataParams = {
    apiKey,
    language: "en",
  };
  if(preferences.categories){
    params.category = preferences.categories;
  }
  if(preferences.sources){
    params.domain = preferences.sources;
  }

  const res = await axios.get(`${baseUrl}/news`, {
    params,
  });
  return res.data;
};

const searchNews = async (
  keywords: string = "",
  category: string = "",
  sources: string = "",
):Promise<NewsDataResponse> => {
  const params:NewsDataParams = {
    apiKey,
    language: "en",
  };
  if(keywords){
    params.q = keywords
  }
  if(category){
    params.category = category
  }
  if(sources){
    params.domain = sources
  }
  const res = await axios.get(`${baseUrl}/news`, {
    params,
  });
  return res.data;
};

const NewsDataService = {
  getLatest,
  searchNews,
};

export default NewsDataService;
