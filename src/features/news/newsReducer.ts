import { newsAPI } from '../../api/api'
import { BaseThunkType, InferActionsTypes } from '../../store'
import { NewsItemType } from './types'

const initialState = {
  isFetching: false,
  news: [] as Array<NewsItemType>,
  currentNewsItem: null as NewsItemType | null,
}

const newsReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'TOGGLE_FETCHING':
      return {
        ...state,
        isFetching: action.status,
      }

    case 'SET_NEWS':
      return { ...state, news: action.news }

    case 'DELETE_NEWS_ITEM':
      return {
        ...state,
        news: state.news.filter((newsItem) => newsItem.id !== action.id),
      }

    default:
      return state
  }
}
export default newsReducer

export const actions = {
  toggleFetchingAction: (status: boolean) =>
    ({
      type: 'TOGGLE_FETCHING',
      status,
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
}

export const getNewsThunk = (): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFetchingAction(true))
    const data = await newsAPI.getNews()
    dispatch(actions.setNews(data))
    dispatch(actions.toggleFetchingAction(false))
  }
}

export const deleteNewsItemThunk = (id: string): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFetchingAction(true))
    const res = await newsAPI.deleteNewsItem(id)

    if (res.resultCode === 0) {
      dispatch(actions.deleteNewsAction(id))
      dispatch(actions.toggleFetchingAction(false))
    }
  }
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
// type DispatchType = Dispatch<ActionsType>
