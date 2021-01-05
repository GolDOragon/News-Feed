import { NewsItemType } from '../features/news/types'
import { news } from './data'

type SuccessOperation = {
  resultCode: number
}

let currentNews = news

export const newsAPI = {
  getNews: (): Promise<Array<NewsItemType>> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(currentNews), 1000)
    })
  },
  deleteNewsItem: (id: string): Promise<SuccessOperation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        currentNews = currentNews.filter((newsItem) => newsItem.id !== id)

        resolve({
          resultCode: 0,
        })
      }, 1000)
    })
  },
  postNewsItem: (newsItem: NewsItemType): Promise<SuccessOperation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        currentNews.push(newsItem)

        resolve({
          resultCode: 0,
        })
      }, 1000)
    })
  },
}
