export interface NewsData {
  author: string;
  title: string;
  content: string;
  description?: string;
  publishedAt: Date;
  image_url?: string;
  category?: string[];
}

export interface NewsDataResponse {
  status: string;
  totalResults: number;
  results: NewsData[]
}

export interface FilterFormValues {
  keywords?: string;
  sources?: {[key: string]: boolean;};
  categories?: {[key: string]: boolean;};
}

export interface NewsPreferences {
  keywords: string;
  categories: {[key: string]: boolean;};
  sources: {[key: string]: boolean;};
}
export interface NewsPreferencesParam {
  keywords: string;
  categories: string;
  sources: string;
}

export interface NewsDataParams {
  apiKey: string;
  language: string;
  category?: string;
  q?: string;
  domain?:string;
}