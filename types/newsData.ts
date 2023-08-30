export interface Article {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface NewsData {
    country: string
    status: string
    totalResults: number
    articles: Array<Article>
  }