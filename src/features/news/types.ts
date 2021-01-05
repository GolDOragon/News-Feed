import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
  DELETE_NEWS_ITEM,
  GET_NEWS,
  SET_NEWS,
  TOGGLE_FETCHING
} from './actionTypes'

export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U
}
  ? U
  : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  {},
  unknown,
  A
>
export type NewsItemType = {
  id: string
  title: string
  image: string
  message: string
  date: Date
}

export interface GetNewsActionType {
  type: typeof GET_NEWS
}

export interface SetNewsActionType {
  type: typeof SET_NEWS
  news: Array<NewsItemType>
}

export interface ToggleFetchingActionType {
  type: typeof TOGGLE_FETCHING
  status: boolean
}

export interface DeleteNewsActionType {
  type: typeof DELETE_NEWS_ITEM
  id: string
}

export type NewsActionTypes =
  | GetNewsActionType
  | ToggleFetchingActionType
  | SetNewsActionType
  | DeleteNewsActionType

export interface NewsState {
  news: Array<NewsItemType>
  isFetching: boolean
}
