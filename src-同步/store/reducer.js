const initState = {
  inputVal: '',
  todoList: []
}

export default (state = initState, action) => {
  // console.log(state)
  // console.log(action)
  if (action.type === 'actionsAddTodo') {
    // state.todoList.push(action.value)
    // let list = [...state.todoList, action.value] 

    // console.log(state.todoList)
    // console.log(state)
    
    // state.todoList.push(action.value)
    // return Object.assign({}, state, { inputVal: action.value })
    return Object.assign({}, state, { todoList: [...state.todoList, action.value] })
    
  } else if (action.type === 'actionsDelTodo') {
    state.todoList.splice(action.index, 1)
    return Object.assign({}, state, { todoList: [...state.todoList] })

  } else if (action.type === 'actionsChangeInput') {
    return Object.assign({}, state, { inputVal: action.value })
  }
  return state
}
