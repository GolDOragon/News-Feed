import { newsAPI } from '../../api/api'
import { DELETE_NEWS_ITEM, SET_NEWS, TOGGLE_FETCHING } from './actionTypes'
import {
  BaseThunkType,
  InferActionsTypes,
  NewsActionTypes,
  NewsItemType,
  NewsState,
  ToggleFetchingActionType
} from './types'

const initialState: NewsState = {
  isFetching: false,
  news: [],
}

export default (state = initialState, action: NewsActionTypes): NewsState => {
  switch (action.type) {
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.status,
      }

    case SET_NEWS:
      return { ...state, news: action.news }

    case DELETE_NEWS_ITEM:
      return {
        ...state,
        news: state.news.filter((newsItem) => newsItem.id !== action.id),
      }

    default:
      return state
  }
}

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export const actions = {
  toggleFetchingAction: (status: boolean): ToggleFetchingActionType => ({
    type: TOGGLE_FETCHING,
    status,
  }),
  setNews: (news: Array<NewsItemType>) => ({
    type: SET_NEWS,
    news,
  }),
  deleteNewsAction: (id: string) => ({
    type: DELETE_NEWS_ITEM,
    id,
  }),
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
