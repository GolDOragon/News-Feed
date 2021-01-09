import { news, NewsItemTypeForData } from './data'

type SuccessOperation = {
  resultCode: number
  data: {
    relevantTags?: Array<string>
    news?: Array<NewsItemTypeForData>
  }
}

let currentNews: Array<NewsItemTypeForData> = news

export const newsAPI = {
  getNews: (tags: Array<string>): Promise<SuccessOperation> => {
    const checkCompliance = (
      currentTags: Array<string>,
      requestedTags: Array<string>
    ): boolean => {
      for (let i = 0; i < requestedTags.length; i += 1) {
        if (!currentTags.includes(requestedTags[i])) return false
      }
      return true
    }
    const sendingNews = currentNews
      .filter((newsItem) => checkCompliance(newsItem.tags, tags))
      .sort((a, b) => (a.date > b.date ? -1 : 1))

    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            resultCode: 0,
            data: {
              news: sendingNews,
            },
          }),
        1000
      )
    })
  },
  deleteNewsItem: (id: string): Promise<SuccessOperation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        currentNews = currentNews.filter((newsItem) => newsItem.id !== id)

        resolve({
          resultCode: 0,
          data: {},
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
          data: {},
        })
      }, 1000)
    })
  },
  updateNewsItem: (
    newsItem: NewsItemTypeForData
  ): Promise<SuccessOperation> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        currentNews = currentNews.map((item) => {
          if (item.id === newsItem.id) return newsItem
          return item
        })

        resolve({
          resultCode: 0,
          data: {},
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
