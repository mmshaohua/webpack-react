export const ChangeInput= value => {
  return {
    type: 'actionsChangeInput',
    value
  }
}

export const AddTodo = value => {
  return {
    type: 'actionsAddTodo',
    value
  }
}

export const DelTodo = index => {
  return {
    type: 'actionsDelTodo',
    index
  }
}
