export interface NewsData {
  author: string;
  title: string;
  content: string;
  description?: string;
  publishedAt: Date;
  urlToImage?: string;
}

export interface FilterFormValues {
  keywords?: string;
  date?: Date | "";
  category?: string;
  source?: string;
}