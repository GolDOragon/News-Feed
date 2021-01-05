/* eslint-disable import/no-cycle */
import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleWare, { ThunkAction } from 'redux-thunk'
import { CounterReducer } from './features/counter'
import { NewsReducer } from './features/news'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  news: NewsReducer,
})

export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U
}
  ? U
  : never

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeWithDevTools({})(
    applyMiddleware(thunkMiddleWare)
  )
)

export default store
