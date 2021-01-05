import { newsAPI } from '../../api/api'
import { BaseThunkType, InferActionsTypes } from '../../store'
import { NewsItemType } from './types'

const initialState = {
  isFetching: true,
  requestProgress: [] as Array<string>,
  news: [] as Array<NewsItemType>,
  currentNewsItem: null as NewsItemType | null,
}

const newsReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case 'TOGGLE_REQUEST_PROGRESS':
      return {
        ...state,
        requestProgress: action.isFetching
          ? [...state.requestProgress, action.id]
          : state.requestProgress.filter((id) => id !== action.id),
      }

    case 'SET_NEWS':
      return { ...state, news: action.news }

    case 'DELETE_NEWS_ITEM':
      return {
        ...state,
        news: state.news.filter((newsItem) => newsItem.id !== action.id),
      }

    case 'POST_NEWS_ITEM':
      return {
        ...state,
        news: [...state.news, action.newsItem],
      }

    default:
      return state
  }
}
export default newsReducer

export const actions = {
  toggleIsFetchingAction: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const),
  toggleRequestProgress: (isFetching: boolean, id: string) =>
    ({
      type: 'TOGGLE_REQUEST_PROGRESS',
      isFetching,
      id,
    } as const),

  setNews: (news: Array<NewsItemType>) =>
    ({
      type: 'SET_NEWS',
      news,
    } as const),

  deleteNewsAction: (id: string) =>
    ({
      type: 'DELETE_NEWS_ITEM',
      id,
    } as const),
  postNewsItemAction: (newsItem: NewsItemType) =>
    ({
      type: 'POST_NEWS_ITEM',
      newsItem,
    } as const),
}

export const getNewsThunk = (): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetchingAction(true))
    const data = await newsAPI.getNews()
    dispatch(actions.setNews(data))
    dispatch(actions.toggleIsFetchingAction(false))
  }
}

export const deleteNewsItemThunk = (id: string): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetchingAction(true))
    dispatch(actions.toggleRequestProgress(true, id))
    const res = await newsAPI.deleteNewsItem(id)

    if (res.resultCode === 0) {
      dispatch(actions.deleteNewsAction(id))
      dispatch(actions.toggleIsFetchingAction(false))
      dispatch(actions.toggleRequestProgress(false, id))
    }
  }
}

export const postNewsItemThunk = (newsItem: NewsItemType): ThunkType => {
  return async (dispatch) => {
    const res = await newsAPI.postNewsItem(newsItem)
    if (res.resultCode === 0) {
      dispatch(actions.postNewsItemAction(newsItem))
    }
  }
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
// type DispatchType = Dispatch<ActionsType>
