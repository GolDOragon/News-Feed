import { message } from 'antd'
import { newsAPI } from '../../api/api'
import { BaseThunkType, InferActionsTypes } from '../../store'
import { AppWorkModeType, NewsItemType } from './types'

const initialState = {
  appWorkMode: 'view' as AppWorkModeType,
  news: [] as Array<NewsItemType>,
  currentNewsItem: {
    id: '',
    image: '',
    date: new Date(),
    message: '',
    title: '',
    tags: [],
  } as NewsItemType,
  relevantTags: [] as Array<string>,
  selectedTags: [] as Array<string>,
}

const newsReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'TOGGLE_APP_WORK_MODE':
      return {
        ...state,
        appWorkMode: action.newValue,
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
    case 'UPDATE_NEWS_ITEM':
      return {
        ...state,
        news: state.news.map((item) => {
          if (item.id === action.newsItem.id) return action.newsItem
          return item
        }),
      }

    case 'ADD_NEWS_ITEM_TO_STATE':
      return {
        ...state,
        currentNewsItem: state.news.find(
          (newsItem) => newsItem.id === action.id
        )!,
      }

    case 'UPDATE_CURRENT_NEWS_ITEM':
      return {
        ...state,
        currentNewsItem: action.currentNewsItem,
      }
    case 'CLEAR_CURRENT_NEWS_ITEM':
      return {
        ...state,
        currentNewsItem: {
          id: '',
          image: '',
          date: new Date(),
          message: '',
          title: '',
          tags: [],
        },
      }

    case 'SET_RELEVANT_TAGS':
      return {
        ...state,
        relevantTags: action.tags,
      }

    case 'ADD_SELECTED_TAG':
      return {
        ...state,
        selectedTags: [...state.selectedTags, action.tag],
      }

    case 'REMOVE_SELECTED_TAG':
      return {
        ...state,
        selectedTags: state.selectedTags.filter((tag) => tag !== action.tag),
      }
    default:
      return state
  }
}
export default newsReducer

export const actions = {
  updateCurrentNewsItem: (currentNewsItem: NewsItemType) =>
    ({
      type: 'UPDATE_CURRENT_NEWS_ITEM',
      currentNewsItem,
    } as const),
  clearCurrentNewsItem: () =>
    ({
      type: 'CLEAR_CURRENT_NEWS_ITEM',
    } as const),
  toggleAppWorkMode: (newValue: AppWorkModeType) =>
    ({
      type: 'TOGGLE_APP_WORK_MODE',
      newValue,
    } as const),

  setNews: (news: Array<NewsItemType>) =>
    ({
      type: 'SET_NEWS',
      news,
    } as const),

  deleteNews: (id: string) =>
    ({
      type: 'DELETE_NEWS_ITEM',
      id,
    } as const),
  postNewsItem: (newsItem: NewsItemType) =>
    ({
      type: 'POST_NEWS_ITEM',
      newsItem,
    } as const),
  updateNewsItem: (newsItem: NewsItemType) =>
    ({
      type: 'UPDATE_NEWS_ITEM',
      newsItem,
    } as const),
  addNewsItemToState: (id: string) =>
    ({
      type: 'ADD_NEWS_ITEM_TO_STATE',
      id,
    } as const),
  setRelevantTags: (tags: Array<string>) =>
    ({
      type: 'SET_RELEVANT_TAGS',
      tags,
    } as const),
  addSelectedTag: (tag: string) =>
    ({
      type: 'ADD_SELECTED_TAG',
      tag,
    } as const),
  removeSelectedTag: (tag: string) =>
    ({
      type: 'REMOVE_SELECTED_TAG',
      tag,
    } as const),
}

export const requestNewsThunk = (
  selectedTags: Array<string> = []
): ThunkType => {
  return async (dispatch) => {
    const hide = message.loading('Loading news...')
    const data = await newsAPI.getNews(selectedTags)
    if (data.resultCode === 0) {
      dispatch(actions.setNews(data.data.news!))
      hide()
    }
  }
}

export const deleteNewsItemThunk = (id: string): ThunkType => {
  return async (dispatch) => {
    const hide = message.loading('Deleting news...')
    const res = await newsAPI.deleteNewsItem(id)

    if (res.resultCode === 0) {
      dispatch(actions.deleteNews(id))
      hide()
      message.success('News deleted!')
    }
  }
}

export const postNewsItemThunk = (newsItem: NewsItemType): ThunkType => {
  return async (dispatch) => {
    const hide = message.loading('Posting news...')
    const res = await newsAPI.postNewsItem(newsItem)
    if (res.resultCode === 0) {
      dispatch(actions.postNewsItem(newsItem))
      dispatch(actions.toggleAppWorkMode('view'))
      hide()
      message.success('News Posted!')
    }
  }
}

export const updateNewsItemThunk = (newsItem: NewsItemType): ThunkType => {
  return async (dispatch) => {
    const hide = message.loading('Updating news...')
    const res = await newsAPI.updateNewsItem(newsItem)
    if (res.resultCode === 0) {
      dispatch(actions.updateNewsItem(newsItem))
      dispatch(actions.toggleAppWorkMode('view'))
      hide()
      message.success('News updated!')
    }
  }
}

export const getRelevantTagsThunk = (
  searchedTag: string,
  selectedTags: Array<string>
): ThunkType => {
  return async (dispatch) => {
    const res = await newsAPI.getRelevantTags(searchedTag, selectedTags)

    if (res.resultCode === 0) {
      dispatch(actions.setRelevantTags(res.data!.relevantTags || []))
    }
  }
}

export const selectTagThunk = (
  tag: string,
  searchValue: string,
  selectedTags: Array<string>
): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.addSelectedTag(tag))
    dispatch(getRelevantTagsThunk(searchValue, [...selectedTags, tag]))
    dispatch(requestNewsThunk([...selectedTags, tag]))
  }
}
export const unselectTagThunk = (
  tag: string,
  searchValue: string,
  selectedTags: Array<string>
): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.removeSelectedTag(tag))
    dispatch(
      getRelevantTagsThunk(
        searchValue,
        selectedTags.filter((selTag) => selTag !== tag)
      )
    )
    dispatch(requestNewsThunk(selectedTags.filter((selTag) => selTag !== tag)))
  }
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
// type DispatchType = Dispatch<ActionsType>
