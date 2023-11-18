import { useEffect, useState } from "react";
import NewsAPIService from "src/services/NewsApiService";
import NewsCard from "src/components/NewsCard";
import { FilterFormValues, NewsData } from "src/utils/types";
import NewsFilter from "src/components/NewsFilter";

const News = () => {
  const [loading, setLoading] = useState<boolean>();
  const [news, setNews] = useState<NewsData[]>([]);

  useEffect(() => {
    setLoading(true);
    NewsAPIService.searchNews().then((res) => {
      setNews(res.data.articles);
      setLoading(false);
    });
  }, [setNews]);

  const handleSubmit = async (values: FilterFormValues) => {
    setLoading(true);
    const { keywords, date, category } = values;

    try{
      const res = await NewsAPIService.searchNews(keywords, date, category)
      console.log(res.data);
      setNews(res.data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewsFilter handleSubmit={handleSubmit} />
      <div className="flex flex-col gap-2">
        {
          news.map((newsData, idx) => <NewsCard key={idx} data={newsData} />)
        }
      </div>
    </div>
  );
};

export default News;
