export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  source: string;
  imageUrl?: string;
  publishedAt: string;
  category: 'Football' | 'Basketball' | 'Tennis' | 'Other';
}
