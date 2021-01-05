/* eslint-disable import/no-cycle */
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleWare from 'redux-thunk'
import { CounterReducer } from './features/counter'
import { NewsReducer } from './features/news'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  news: NewsReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeWithDevTools({})(
    applyMiddleware(thunkMiddleWare)
  )
)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default store
