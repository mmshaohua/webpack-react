import { createStore } from 'redux'

const initState = {
  userInfo: null
}

export default createStore((state = initState, action) => {
  if (action.type === 'login') {
    return Object.assign({}, state, {
      userInfo: 'xiaobai'
    })
  }
  return state
})
