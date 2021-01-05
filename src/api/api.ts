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
    currentNews = currentNews.filter((newsItem) => newsItem.id !== id)
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            resultCode: 0,
          }),
        1000
      )
    })
  },
}
