// eslint-disable-next-line import/no-cycle
import { AppStateType } from '../../store'

export const getFetching = (state: AppStateType) => state.news.isFetching

export const getNews = (state: AppStateType) => state.news.news
