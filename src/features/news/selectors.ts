import { createSelector } from 'reselect'
import { AppStateType } from '../../store'

export const getNews = createSelector(
  [
    (state: AppStateType) => state.news.news,
  ],
  (filteredNews) => {
    const executeDate = (date: Date): string => {
      const diff = Date.now() - +date

      const sec = Math.floor(diff / 1000)
      if (sec < 60) return 'less 1 min'

      const min = Math.floor(diff / (60 * 1000))
      if (min < 60) return min + ' min'

      const hours = Math.floor(diff / (60 * 60 * 1000))
      if (hours < 49) return hours + 'h'

      return date.toUTCString().match(/\d{2} \w+/)![0]
    }

    return filteredNews.map((newsItem) => ({
      ...newsItem,
      date: executeDate(newsItem.date),
    }))
  }
)

export const getAppWorkMode = (state: AppStateType) => state.news.appWorkMode

export const getCurrentNewsItem = (state: AppStateType) =>
  state.news.currentNewsItem

export const getSearchField = (state: AppStateType) => state.news.searchField

export const getRelevantTags = (state: AppStateType) =>
  state.news.relevantTags.map((tag) => ({ value: tag, label: tag }))

export const getSelectedTags = (state: AppStateType) => state.news.selectedTags
