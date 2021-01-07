// eslint-disable-next-line import/no-cycle
import { AppStateType } from '../../store'

export const getRequestProgress = (state: AppStateType) =>
  state.news.requestProgress

export const getNews = (state: AppStateType) => {
  const checkCrossing = (
    newsItemTags: Array<string>,
    selectedTags: Array<string>
  ): boolean => {
    for (let i = 0; i < selectedTags.length; i += 1) {
      if (!newsItemTags.includes(selectedTags[i])) return false
    }
    return true
  }

  const { selectedTags, news } = state.news
  return news.filter((newsItem) => checkCrossing(newsItem.tags, selectedTags))
}

export const getAppWorkMode = (state: AppStateType) => state.news.appWorkMode

export const getCurrentNewsItem = (state: AppStateType) =>
  state.news.currentNewsItem

export const getSearchField = (state: AppStateType) => state.news.searchField

export const getRelevantTags = (state: AppStateType) => state.news.relevantTags

export const getSelectedTags = (state: AppStateType) => state.news.selectedTags
