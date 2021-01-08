import { news, NewsItemTypeForData } from './data'

type SuccessOperation = {
  resultCode: number
  data?: {
    relevantTags?: Array<string>
  }
}

let currentNews = news

export const newsAPI = {
  getNews: (): Promise<Array<NewsItemTypeForData>> => {
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
  postNewsItem: (newsItem: NewsItemTypeForData): Promise<SuccessOperation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        currentNews.push(newsItem)

        resolve({
          resultCode: 0,
        })
      }, 1000)
    })
  },
  getRelevantTags: (
    searchedTag: string,
    selectedTags: Array<string>
  ): Promise<SuccessOperation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (searchedTag === '') {
          resolve({
            resultCode: 0,
            data: {
              relevantTags: [],
            },
          })
        }

        const relevantTagsSet: Set<string> = new Set()
        currentNews.forEach((newsItem) => {
          newsItem.tags
            .filter((tag) =>
              tag.toLowerCase().includes(searchedTag.toLowerCase())
            )
            .filter((tag) => !selectedTags.includes(tag))
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
