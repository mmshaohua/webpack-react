import * as constants from './constants'

const initState = {
  name: 'xiaobai'
}

export default (state = initState, action) => {
  // console.log(state)
  switch (action.type) { 
    case constants.changeName:
      return Object.assign({}, state, {
        name: action.value
      })
    
    default:
      return state
  }
}
