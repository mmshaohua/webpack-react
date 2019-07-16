import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// 引入拆分出去的 reducer
import todoReducer from './todo/reducer'
import helloReducer from './hello/reducer'

const composeEnxxx = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combineRdeducers = obj => {
  return (state = {}, action) => {
    let res = {}
    for (let key in obj) {
      res[key] = obj[key](state[key], action)
    }
    return res
  }
}

export default createStore(
  combineRdeducers({
    todo: todoReducer,
    hello: helloReducer
  }),
  composeEnxxx(applyMiddleware(thunk, logger))
)
