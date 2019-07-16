import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// 引入拆分出去的 reducer
import todo from './todo/reducer'
import hello from './hello/reducer'

const composeEnxxx = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers({
    todo,
    hello
  }),
  composeEnxxx(applyMiddleware(thunk, logger))
)
