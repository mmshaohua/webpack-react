import * as constants from './constants'

/**
 * 生成 changeInput 动作的函数
 * @param {String} value 输入框输入的内容
 */
export const actionsChangeInput = value => ({
  type: constants.changeInput,
  value
})

/**
 * 添加 todo 数据
 */
export const actionsAddTodo = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:9090/todoList', {
      method: 'POST',
      body: JSON.stringify({
        todo: getState().todo.inputVal
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(res => {
        // console.log(res)
        dispatch({ type: constants.addTodo, value: res })
      })
  }
}

/**
 * 初始化todos的数据
 */
export const actionsInitTodoList = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:9090/todoList')
      .then(responae => responae.json())
      .then(res => {
        // console.log(res)
        dispatch({ type: constants.initTodoList, value: res})
      })
  }
}

/**
 * 删除 todo 的数据
 */
export const actionsDelTodo = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:9090/todoList/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
      .then(res => {
        // console.log(res)
        console.log(getState())
        dispatch({ type: constants.delTodo, value: id })
        dispatch(actionsInitTodoList())
      })
  }
}
