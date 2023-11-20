import { useEffect, useState } from "react";
import NewsDataService from "src/services/NewsDataService";
import NewsCard from "src/components/NewsCard";
import {
  FilterFormValues,
  NewsData,
  NewsPreferencesParam,
} from "src/utils/types";
import NewsFilter from "src/components/NewsFilter";
import { App, Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNewsPreferences } from "src/hooks/useNewsPreferences";
import { getTrueKeys } from "src/utils";

const News = () => {
  const { message } = App.useApp();

  const [loading, setLoading] = useState<boolean>();
  const [news, setNews] = useState<NewsData[]>([]);
  const { preferences: rawPreferences } = useNewsPreferences();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const preferences: NewsPreferencesParam = {
          keywords: rawPreferences.keywords,
          categories: rawPreferences.categories
            ? getTrueKeys(rawPreferences.categories)
            : "",
          sources: rawPreferences.sources
            ? getTrueKeys(rawPreferences.sources)
            : "",
        };
        const { results } = await NewsDataService.getLatest(preferences);
        setNews(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        message.error("Unexpected error has occured, please try again");
        setLoading(false);
      }
    };
    getData();
  }, [rawPreferences, message]);

  const handleSearch = async (values: FilterFormValues) => {
    setLoading(true);
    const { keywords, categories: rawCategories, sources: rawSources } = values;
    const sources = rawSources ? getTrueKeys(rawSources) : "";
    const categories = rawCategories ? getTrueKeys(rawCategories) : "";
    try {
      const { results: newsAPINews } = await NewsDataService.searchNews(
        keywords,
        categories,
        sources
      );
      setNews(newsAPINews);
      setLoading(false);
    } catch (error) {
      console.log(error);
      message.error("Unexpected error has occured, please try again");
      setLoading(false);
    }
  };

  return (
    <div className="flex-grow">
      <NewsFilter handleSubmit={handleSearch} />
      <div
        className={`flex flex-col gap-2 relative transition-[100ms] ${
          loading ? "opacity-50" : "opacity-100"
        }`}
      >
        {loading && (
          <div className="w-full absolute top-[100px] text-center">
            <Spin indicator={<LoadingOutlined />} />
          </div>
        )}
        {news?.length > 0 &&
          news.map((newsData, idx) => <NewsCard key={idx} data={newsData} />)}

        {news.length === 0 && !loading && (
          <Typography.Paragraph className="py-4 text-center">
            Couldnt find any news that matches your filtering.
          </Typography.Paragraph>
        )}
      </div>
    </div>
  );
};

export default News;
