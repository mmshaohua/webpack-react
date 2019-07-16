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
      return Object.assign({}, state, {
        todoList: [...state.todoList, action.value]
      })
    
    case constants.changeInput:
      return Object.assign({}, state, {
        inputVal: action.value
      })
    
    case constants.delTodo:
      return Object.assign({}, state, {
        todoList: state.todoList.filter(item =>
          item.id !== action.value
        )
      })
    
    default:
      return state
  }
}
