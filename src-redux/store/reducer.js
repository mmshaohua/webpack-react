import * as constants from './constants'

const initState = {
  inputVal: '',
  todoList: []
}

export default (state = initState, action) => {
  // console.log(state)
  switch (action.type) { 
    case constants.initTodoList:
      return Object.assign({}, state, {
        todoList: action.value
      })

    case constants.addTodo:
      // state.inputVal = ''
      return Object.assign({}, state, { todoList: [...state.todoList, action.value] })
    
    case constants.changeInput:
      return Object.assign({}, state, { inputVal: action.value })
    
    case constants.delTodo:
      let list = state.todoList.slice(0)
      list.splice(action.value, 1)
      return Object.assign({}, state, { todoList: [...list] })
    
    default:
      return state
  }
}
