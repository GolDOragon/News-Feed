import { NewsItemType } from '../features/news/types'
import { news } from './data'

type SuccessOperation = {
  resultCode: number
  data?: {
    relevantTags?: Array<string>
  }
}

let currentNews = news

export const newsAPI = {
  getNews: (): Promise<Array<NewsItemType>> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(currentNews.slice()), 1000)
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
  getRelevantTags: (searchedTag: string): Promise<SuccessOperation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const relevantTagsSet: Set<string> = new Set()
        currentNews.forEach((newsItem) => {
          newsItem.tags
            .filter((tag) =>
              tag.toLowerCase().includes(searchedTag.toLowerCase())
            )
            .forEach((tag) => {
              relevantTagsSet.add(tag)
            })
        })

        resolve({
          resultCode: 0,
          data: {
            relevantTags: Array.from(relevantTagsSet),
          },
        })
      }, 200)
    })
  },
}
