// eslint-disable-next-line import/no-cycle
import { AppStateType } from '../../store'

export const getRequestProgress = (state: AppStateType) =>
  state.news.requestProgress

export const getNews = (state: AppStateType) => state.news.news

export const getIsEditMode = (state: AppStateType) => state.news.isEditMode

export const getCurrentNewsItem = (state: AppStateType) =>
  state.news.currentNewsItem

export const getSearchField = (state: AppStateType) => state.news.searchField

export const getRelevantTags = (state: AppStateType) => state.news.relevantTags
